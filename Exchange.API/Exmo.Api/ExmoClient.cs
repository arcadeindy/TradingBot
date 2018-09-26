﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using TradingBot.Common;
using TradingBot.Core;
using TradingBot.Core.Entities;
using TradingBot.Core.Enums;

namespace Exmo.Api
{
	public class ExmoClient : ApiClient, IApiClient
	{
		private readonly IExmoSettings _settings;

		public ExmoClient()
		{
			_settings = new ExmoSettings();
		}

		public ExchangeType Type => ExchangeType.Exmo;

		public async Task<PairResponse> GetPairsAsync()
		{
			var content = await CallAsync<Dictionary<string, dynamic>>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, "pair_settings"));
			var pairs = new List<TradePair>();

			foreach (string key in content.Keys)
			{
				var dto = new TradePair();
				string[] assets = key.Split('_');
				dto.BaseAsset = assets[0];
				dto.QuoteAsset = assets[1];
				pairs.Add(dto);
			}

			return new PairResponse(pairs);
		}

		public async Task<PairDetailResponse> GetPairDetailAsync(PairDetailRequest request)
		{
			if (String.IsNullOrEmpty(request.Pair))
			{
				throw new ArgumentNullException(nameof(request.Pair));
			}

			var content = await CallAsync<Dictionary<string, dynamic>>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, "ticker"));
			var dto = new PairDetailResponse();
			dynamic item = content[request.Pair];
			dto.LastPrice = item.last_trade;
			dto.High = item.high;
			dto.Low = item.low;
			dto.Volume = item.vol;
			dto.Ask = item.buy_price;
			dto.Bid = item.sell_price;

			return dto;
		}

		public async Task<DepthResponse> GetOrderBookAsync(DepthRequest request)
		{
			//if (String.IsNullOrEmpty(request.Pair))
			//{
			//	throw new ArgumentNullException(nameof(request.Pair));
			//}

			//var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, $"order_book?pair={request.Pair}&limit={request.Limit}"));
			//var dto = Helper.BuildOrderBook(((IEnumerable<dynamic>)content[request.Pair].ask).Take((int)request.Limit), ((IEnumerable<dynamic>)content[request.Pair].bid).Take((int)request.Limit), item => new BookOrderDto { Price = item[0], Amount = item[2] });

			//return dto;

			return null;
		}

		public Task<CreateOrderResponse> CreateOrderAsync(CreateOrderRequest request)
		{
			//HMACSHA512

			return null;
		}

		public Task<CancelOrderResponse> CancelOrderAsync(CancelOrderRequest request)
		{


			return null;
		}

		#region Private methods

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
					"Sign", BitConverter.ToString(new HMACSHA512(Encoding.UTF8.GetBytes(_settings.Secret)).ComputeHash(Encoding.UTF8.GetBytes(content))).Replace("-", "").ToLower()
				}
			});

			return CallAsync<dynamic>(HttpMethod.Post, BuildUrl(_settings.PrivateUrl, content), new StringContent(content, Encoding.UTF8, "application/x-www-form-urlencoded"));
		}

		protected override async void HandleError(HttpResponseMessage response)
		{
			if (response.IsSuccessStatusCode)
			{
				return;
			}

			var content = await HttpHelper.AcquireContentAsync<ErrorModel>(response);
			throw new HttpRequestException(content.Error);
		}

		#endregion
	}
}