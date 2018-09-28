﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using TradingBot.Common;
using TradingBot.Core;
using TradingBot.Core.Enums;
using Yobit.Api.Models;

namespace Yobit.Api
{
	public sealed class YobitClient : ApiClient
	{
		private readonly IYobitSettings _settings;

		public YobitClient()
		{
			_settings = new YobitSettings();
		}

		public ExchangeType Type => ExchangeType.Yobit;

		#region Public API

		public async Task<TradePairsResponse> GetTradePairsAsync()
		{
			var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, "info?ignore_invalid=1"));
			var pairs = new List<TradePairResult>();

			foreach (dynamic key in content.pairs)
			{
				dynamic pair = content.pairs[(string)key.Name];

				if ((bool)pair.hidden)
				{
					continue;
				}

				var item = new TradePairResult();
				string[] assets = ((string)key.Name).Split('_');
				item.BaseAsset = assets[0];
				item.QuoteAsset = assets[1];
				pairs.Add(item);
			}

			return new TradePairsResponse(pairs);
		}

		public async Task<MarketResponse> GetMarketAsync(MarketRequest request)
		{
			if (String.IsNullOrEmpty(request.Pair))
			{
				throw new ArgumentNullException(nameof(request.Pair));
			}

			var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, $"ticker/{request.Pair}?ignore_invalid=1"));
			dynamic data = content[request.Pair];

			return new MarketResponse
			{
				LastPrice = data.last,
				Volume = data.vol,
				AskPrice = data.buy,
				BidPrice = data.sell,
				High = data.high,
				Low = data.low
			};
		}

		public async Task<DepthResponse> GetOrderBookAsync(DepthRequest request)
		{
			if (String.IsNullOrEmpty(request.Pair))
			{
				throw new ArgumentNullException(nameof(request.Pair));
			}

			var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, $"depth/{request.Pair}?limit={request.Limit}&ignore_invalid=1"));
			dynamic data = content[request.Pair];
			var asks = ((IEnumerable<dynamic>)data.asks).Take(request.Limit).Select(x => new OrderInBookResult { Rate = x.Price, Volume = x.Volume }).Where(x => x.Rate > 0);
			var bids = ((IEnumerable<dynamic>)data.bids).Take(request.Limit).Select(x => new OrderInBookResult { Rate = x.Price, Volume = x.Volume }).Where(x => x.Rate > 0);

			if (!asks.Any() || !bids.Any())
			{
				return new DepthResponse();
			}

			if (asks.Count() < bids.Count())
			{
				bids = bids.Take(asks.Count());
			}
			else
			{
				asks = asks.Take(bids.Count());
			}

			return new DepthResponse(asks.ToList(), bids.ToList());
		}

		#endregion

		#region Private API

		public async Task<CreateOrderResponse> CreateOrderAsync(CreateOrderRequest request)
		{
			if (String.IsNullOrEmpty(request.Pair))
			{
				throw new ArgumentNullException(nameof(request.Pair));
			}

			string queryString = HttpHelper.QueryString(new Dictionary<string, string>
			{
				{"method", "Trade"},
				{"pair", request.Pair},
				{"type", request.TradeType.ToString()},
				{"rate", request.Rate.ToString(CultureInfo.InvariantCulture)},
				{"amount", request.Amount.ToString(CultureInfo.InvariantCulture)},
				{"nonce", GenerateNonce(_settings.CreatedAt)}
			}, true);
			var content = await MakePrivateCallAsync(queryString);

			return new CreateOrderResponse((long)content.order_id);
		}

		public async Task<CancelOrderResponse> CancelOrderAsync(CancelOrderRequest request)
		{
			if (request.OrderId <= 0)
			{
				throw new ArgumentOutOfRangeException(nameof(request.OrderId));
			}

			string queryString = HttpHelper.QueryString(new Dictionary<string, string> { { "method", "CancelOrderRequest" }, { "order_id", request.OrderId.ToString() }, { "nonce", GenerateNonce(_settings.CreatedAt) } }, true);
			var content = await MakePrivateCallAsync(queryString);

			return new CancelOrderResponse((long)content.@return.order_id);
		}

		public async Task<OpenOrdersResponse> GetOpenOrdersAsync(OpenOrdersRequest request)
		{
			//var order = new { nonce = DateTime.Now.ToString(CultureInfo.InvariantCulture) };
			//dynamic content = await MakePrivateCallAsync(order, "orders");
			var response = new OpenOrdersResponse();

			//foreach (dynamic item in content)
			//{

			//}

			return response;
		}

		#endregion

		#region Private method

		private Task<dynamic> MakePrivateCallAsync(string content)
		{
			if (String.IsNullOrEmpty(_settings.PrivateUrl))
			{
				throw new ArgumentNullException(nameof(_settings.PrivateUrl));
			}

			if (String.IsNullOrEmpty(_settings.ApiKey))
			{
				throw new ArgumentNullException(nameof(_settings.ApiKey));
			}

			if (String.IsNullOrEmpty(_settings.Secret))
			{
				throw new ArgumentNullException(nameof(_settings.Secret));
			}

			SetHeaders(new Dictionary<string, string>
			{
				{"Key", _settings.ApiKey},
				{
					"Sign", HttpHelper.GetHash(new HMACSHA512(), _settings.Secret, content).ToLower()
				}
			});

			return CallAsync<dynamic>(HttpMethod.Post, BuildUrl(_settings.PrivateUrl, content), new StringContent(content, Encoding.UTF8, "application/x-www-form-urlencoded"));
		}

		private string GenerateNonce(DateTimeOffset date)
		{
			return (DateTime.UtcNow - date).TotalSeconds.ToString(CultureInfo.InvariantCulture);
		}

		protected override async void HandleError(HttpResponseMessage response)
		{
			var content = await HttpHelper.AcquireContentAsync<ErrorModel>(response);

			if (!content.Success && !String.IsNullOrEmpty(content.Error))
			{
				throw new HttpRequestException(content.Error);
			}
		}

		#endregion

		//public async Task<OrderDetails> GetOrderInfoAsync(int orderId)
		//{
		//	if (orderId <= 0)
		//	{
		//		throw new ArgumentOutOfRangeException(nameof(orderId));
		//	}

		//	try
		//	{
		//		HttpResponseMessage response = await _api.GetOrderInfoAsync(orderId, _settings);
		//		var result = await HttpHelper.AcquireContentAsync<dynamic>(response);

		//		if (!result.success)
		//		{
		//			throw new YobitException(result.Error); //Hack because private API always returns 200 status code.
		//		}

		//		var model = new OrderDetails();

		//		foreach (dynamic item in result.@return)
		//		{
		//			dynamic value = item.Value;
		//			model.Orders.Add((int)item.Key, new OrderInfo
		//			{
		//				Pair = value.pair,
		//				Type = Enum.Parse(typeof(TradeType), value.type, true),
		//				StartAmount = value.start_amount,
		//				Volume = value.amount,
		//				Rate = value.rate,
		//				CreatedAt = DateTimeOffset.FromUnixTimeSeconds(value.timestamp_created),
		//				Status = Enum.Parse(typeof(OrderStatus), value.status)
		//			});
		//		}

		//		return model;
		//	}
		//	catch (YobitException ex)
		//	{
		//		throw new HttpRequestException(ex.Message, ex);
		//	}
		//}

		//public async Task<Balance> GetInfoAsync()
		//{
		//	try
		//	{
		//		HttpResponseMessage response = await _api.GetInfoAsync(_settings);
		//		var result = await HttpHelper.AcquireContentAsync<dynamic>(response);

		//		if (!(bool)result.success)
		//		{
		//			throw new YobitException(result.Error); //Hack because private API always returns 200 status code.
		//		}

		//		var model = new Balance();

		//		foreach (dynamic item in result.@return.funds)
		//		{
		//			model.Funds.Add(item.Name, (decimal)item.Value);
		//		}

		//		foreach (dynamic item in result.@return.funds_incl_orders)
		//		{
		//			model.FundsIncludeOrders.Add(item.Name, (decimal)item.Value);
		//		}

		//		model.TransactionCount = result.@return.transaction_count;
		//		model.OpenOrders = result.@return.open_orders;

		//		return model;
		//	}
		//	catch (YobitException ex)
		//	{
		//		throw new HttpRequestException(ex.Message, ex);
		//	}
		//}

		//public async Task<OrderResponse> GetTradesAsync(string pair, uint limit = 150)
		//{
		//	try
		//	{
		//		HttpResponseMessage response = await _api.GetTradesAsync(pair, limit);
		//		var result = await HttpHelper.AcquireContentAsync<dynamic>(response);
		//		var model = new OrderResponse();

		//		foreach (dynamic item in result[pair])
		//		{
		//			var trade = new Trade
		//			{
		//				Type = (TradeType)Enum.Parse(typeof(TradeType), (string)item.type, true),
		//				Rate = item.price,
		//				Volume = item.amount,
		//				Tid = item.tid,
		//				Timestamp = DateTimeOffset.FromUnixTimeSeconds((long)item.timestamp)
		//			};
		//			model.Orders.Add(trade);
		//		}

		//		return model;
		//	}
		//	catch (YobitException ex)
		//	{
		//		throw new HttpRequestException(ex.Message, ex);
		//	}
		//}

		//public async Task<OrderDetails> GetActiveOrdersOfUserAsync(string pair)
		//{
		//	if (String.IsNullOrEmpty(pair))
		//	{
		//		throw new ArgumentNullException(nameof(pair));
		//	}

		//	try
		//	{
		//		HttpResponseMessage response = await _api.GetActiveOrdersOfUserAsync(_settings, pair);
		//		var result = await HttpHelper.AcquireContentAsync<dynamic>(response);

		//		if (!(bool)result.success)
		//		{
		//			throw new YobitException(result.Error); //Hack because private API always returns 200 status code.
		//		}

		//		var model = new OrderDetails();

		//		foreach (dynamic item in result.@return)
		//		{
		//			dynamic value = item.Value;
		//			model.Orders.Add((int)item.Key, new OrderInfo
		//			{
		//				Pair = value.pair,
		//				Type = Enum.Parse(typeof(TradeType), value.type, true),
		//				Volume = value.amount,
		//				Rate = value.rate,
		//				CreatedAt = DateTimeOffset.FromUnixTimeSeconds(value.timestamp_created)
		//			});
		//		}

		//		return model;
		//	}
		//	catch (YobitException ex)
		//	{
		//		throw new HttpRequestException(ex.Message, ex);
		//	}
		//}
	}
}