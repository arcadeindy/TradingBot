﻿using Binance.Api;
using Bitfinex.Api;
using Cryptopia.Api;
using Exmo.Api;
using Huobi.Api;
using Kucoin.Api;
using Okex.Api;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TradingBot.Core;
using TradingBot.Core.Entities;
using TradingBot.Core.Enums;
using TradingBot.CurrencyProvider;
using TradingBot.Data.Entities;
using Yobit.Api;

namespace TradingBot.CommandPrompt
{
	public class Program
	{
		private static async Task Main(string[] args)
		{
			//var provider = new CoinMarketCapClient();
			//var factory = new ExchangeFactory(provider);
			//var scanner = new ArbitrageScanner(factory);
			//scanner.Start();

			Console.ReadLine();
		}
	}

	public class ExchangePair
	{
		public ExchangePair(IExchange from, IExchange to)
		{
			From = from;
			To = to;
			Pairs = new ReadOnlyCollection<Pair>(from.Pairs.Intersect(to.Pairs).ToList());
		}

		public IReadOnlyCollection<Pair> Pairs { get; }
		public IExchange From { get; }
		public IExchange To { get; }
	}

	public class ArbitrageInfo
	{
		public string Symbol { get; set; }
		public string Route { get; set; }
		public decimal Ask { get; set; }
		public decimal Bid { get; set; }
		public float Spread { get; set; }
		public float Rate { get; set; }
		public bool CanTransfer { get; set; }

		public override string ToString()
		{
			return $"{Symbol},{Route},{Ask},{Bid},{Rate:0.##},{(CanTransfer ? "+" : "-")}";
		}
	}

	public class ArbitrageScanner
	{
		private readonly List<IExchange> _exchanges = new List<IExchange>();
		private readonly List<ExchangePair> _exchangePairs = new List<ExchangePair>();
		private readonly CancellationTokenSource _tokenSource = new CancellationTokenSource();

		public ArbitrageScanner(IExchangeFactory factory)
		{
			CreateExchanges(factory);
			GenerateExchangePairs();

			//using (StreamWriter sw = File.CreateText($"Pairs.csv"))
			//{
			//	foreach (var info in _exchangePairs)
			//	{
			//		sw.WriteLine($"{info.From.Type}->{info.To.Type}");
			//	}
			//}
		}

		public async void Start()
		{
			var output = new ConcurrentBag<ArbitrageInfo>();
			var tasks = new List<Task>();

			var watcher = new Stopwatch();
			watcher.Start();

			foreach (ExchangePair exchangePair in _exchangePairs)
			{
				var task = Task.Run(() => ProcessItem(exchangePair, output), _tokenSource.Token);
				tasks.Add(task);
			}

			await Task.WhenAll(tasks);
			watcher.Stop();
			Console.WriteLine("Elapsed time: {0}", watcher.Elapsed);

			using (StreamWriter sw = File.CreateText($"Arbitrage-{DateTime.UtcNow:MM-dd-yyyy}.csv"))
			{
				sw.WriteLine("Symbol,Route,Buy Price,Sell Price,Spread(Book),Rate,I/O");

				foreach (ArbitrageInfo info in output.OrderByDescending(x => x.Rate))
				{
					sw.WriteLine(info);
				}
			}
		}

		private async Task ProcessItem(ExchangePair exchangePair, IProducerConsumerCollection<ArbitrageInfo> output)
		{
			foreach (Pair pair in exchangePair.Pairs)
			{
				decimal from = await exchangePair.From.GetPriceAsync(pair);
				decimal to = await exchangePair.To.GetPriceAsync(pair);
				var model = new ArbitrageInfo();
				model.Symbol = pair.Label;

				if (from > to)
				{
					model.Route = $"{exchangePair.To.Type}->{exchangePair.From.Type}";
					model.Bid = to;
					model.Ask = from;
					model.Rate = GetPercent(from, to);
				}
				else
				{
					model.Route = $"{exchangePair.From.Type}->{exchangePair.To.Type}";
					model.Bid = from;
					model.Ask = to;
					model.Rate = GetPercent(to, from);
				}

				output.TryAdd(model);
				Console.WriteLine($"{output.Count}. {model}");
				Thread.Sleep(3000);
			}
		}

		private float GetPercent(decimal a, decimal b)
		{
			return (float)((a - b) / a * 100);
		}

		public void Stop()
		{
			_tokenSource.Cancel();
		}

		#region Private methods

		private void CreateExchanges(IExchangeFactory factory)
		{
			_exchanges.Add(factory.Create(ExchangeType.Binance));
			_exchanges.Add(factory.Create(ExchangeType.Huobi));
			_exchanges.Add(factory.Create(ExchangeType.Yobit));
			_exchanges.Add(factory.Create(ExchangeType.Bitfinex));
			_exchanges.Add(factory.Create(ExchangeType.Cryptopia));
			_exchanges.Add(factory.Create(ExchangeType.Kucoin));
			_exchanges.Add(factory.Create(ExchangeType.Okex));
			_exchanges.Add(factory.Create(ExchangeType.Exmo));
		}

		private void GenerateExchangePairs()
		{
			for (var i = 0; i < _exchanges.Count; i++)
			{
				for (var j = i + 1; j < _exchanges.Count; j++)
				{
					var exchangePair = new ExchangePair(_exchanges[i], _exchanges[j]);
					_exchangePairs.Add(exchangePair);
				}
			}
		}

		#endregion
	}

	public class Exchange : IExchange
	{
		private readonly IExchangeClient _client;
		private readonly IReadOnlyDictionary<string, IList<Currency>> _currencies;

		public Exchange(IReadOnlyDictionary<string, IList<Currency>> currencies, IExchangeClient client)
		{
			_currencies = currencies;
			_client = client;
		}

		public ExchangeType Type { get; set; }
		public IReadOnlyCollection<Pair> Pairs { get; private set; }

		void IExchange.Initialize()
		{
			var pairs = new List<Pair>();

			foreach (PairDto item in _client.GetPairsAsync().Result)
			{
				if (!_currencies.ContainsKey(item.BaseAsset) || !_currencies.ContainsKey(item.QuoteAsset))
				{
					continue;
				}

				IList<Currency> bases = _currencies[item.BaseAsset];
				IList<Currency> quotes = _currencies[item.QuoteAsset];

				if (bases.Count > 1 || quotes.Count > 1)
				{
					continue;
				}

				if (!String.IsNullOrEmpty(item.BaseAssetName) && !String.IsNullOrEmpty(item.QuoteAssetName) && !item.BaseAssetName.Equals(bases[0].Name) && !item.QuoteAssetName.Equals(quotes[0].Name))
				{
					continue;
				}

				var pair = new Pair(bases[0], quotes[0]);
				pairs.Add(pair);
			}

			Pairs = new ReadOnlyCollection<Pair>(pairs);
		}

		public async Task<decimal> GetPriceAsync(Pair pair)
		{
			PairDetailDto detailDto = await _client.GetPairDetailAsync(pair.GetSymbol(Type));

			return detailDto.LastPrice;
		}
	}

	public interface IExchange
	{
		ExchangeType Type { get; set; }
		IReadOnlyCollection<Pair> Pairs { get; }
		void Initialize();
		Task<decimal> GetPriceAsync(Pair pair);
	}

	public class ExchangeFactory : IExchangeFactory
	{
		private readonly Dictionary<ExchangeType, IExchange> _exchanges = new Dictionary<ExchangeType, IExchange>();
		private readonly IReadOnlyDictionary<string, IList<Currency>> _currencies;

		public ExchangeFactory(ICurrencyProvider provider)
		{
			_currencies = provider.GetCurrenciesAsync().Result;
			//TODO: Add logic for finding registered exchanges
		}

		public IExchange Create(ExchangeType type)
		{
			if (_exchanges.ContainsKey(type))
			{
				return _exchanges[type];
			}

			switch (type)
			{
				case ExchangeType.Binance:
					{
						IExchange ex = new Exchange(_currencies, new BinanceClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Huobi:
					{
						IExchange ex = new Exchange(_currencies, new HuobiClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Yobit:
					{
						IExchange ex = new Exchange(_currencies, new YobitClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Bitfinex:
					{
						IExchange ex = new Exchange(_currencies, new BitfinexClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Kucoin:
					{
						IExchange ex = new Exchange(_currencies, new KucoinClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Okex:
					{
						IExchange ex = new Exchange(_currencies, new OkexClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Cryptopia:
					{
						IExchange ex = new Exchange(_currencies, new CryptopiaClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				case ExchangeType.Exmo:
					{
						IExchange ex = new Exchange(_currencies, new ExmoClient());
						ex.Type = type;
						ex.Initialize();
						_exchanges.Add(type, ex);

						return ex;
					}
				default:
					{
						return null;
					}
			}
		}
	}

	public interface IExchangeFactory
	{
		IExchange Create(ExchangeType type);
	}
}