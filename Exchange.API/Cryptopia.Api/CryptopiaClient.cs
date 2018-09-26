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

namespace Cryptopia.Api
{
	public sealed class CryptopiaClient : ApiClient, IApiClient
	{
		private readonly ICryptopiaSettings _settings;

		public CryptopiaClient()
		{
			_settings = new CryptopiaSettings();
		}

		public ExchangeType Type => ExchangeType.Cryptopia;

		public async Task<PairResponse> GetPairsAsync()
		{
			var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, "GetTradePairs"));
			var pairs = new List<PairDto>();

			foreach (dynamic item in content.Data)
			{
				var dto = new PairDto();
				dto.BaseAssetName = item.Currency;
				dto.BaseAsset = item.Symbol;
				dto.QuoteAssetName = item.BaseCurrency;
				dto.QuoteAsset = item.BaseSymbol;
				dto.MaxOrderSize = item.MaximumTrade;
				dto.MinOrderSize = item.MinimumTrade;
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

			var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, $"GetMarket/{request.Pair}"));
			var response = new PairDetailResponse();
			response.Ask = content.Data.AskPrice;
			response.Bid = content.Data.BidPrice;
			response.High = content.Data.High;
			response.Low = content.Data.Low;
			response.LastPrice = content.Data.LastPrice;
			response.Volume = content.Data.Volume;

			return response;
		}

		public async Task<DepthResponse> GetOrderBookAsync(DepthRequest request)
		{
			if (String.IsNullOrEmpty(request.Pair))
			{
				throw new ArgumentNullException(nameof(request.Pair));
			}

			var content = await CallAsync<dynamic>(HttpMethod.Get, BuildUrl(_settings.PublicUrl, $"GetMarketOrders/{request.Pair}/{request.Limit}"));
			var response = Helper.BuildOrderBook(((IEnumerable<dynamic>) content.Data.Buy).Take((int) request.Limit),
																						   ((IEnumerable<dynamic>) content.Data.Sell).Take((int) request.Limit),
																						   item => new BookOrderDto {Price = item.Price, Amount = item.Volume});

			return response;
		}

		public async Task<CreateOrderResponse> CreateOrderAsync(CreateOrderRequest request)
		{
			var content = await MakePrivateCallAsync("SubmitTrade");
			
			//var nonce = Guid.NewGuid().ToString("N");
			//string hash = Convert.ToBase64String(MD5.Create().ComputeHash(Encoding.UTF8.GetBytes(String.Empty)));
			//Uri uri = BuildUrl(_settings.PrivateUrl, "SubmitTrade");
			//var raw = String.Concat(_settings.ApiKey, "POST", uri.ToString(), nonce, hash);
			//string signature = HttpHelper.GetHash(HMACSHA256.Create(), _settings.Secret, String.Empty);

			//SetHeaders(new Dictionary<string, string> { { "amx", $"{_settings.ApiKey}:{0}:{nonce}" } });
			//var content = await CallAsync<dynamic>(HttpMethod.Post, uri, new StringContent(String.Empty));



			var response = new CreateOrderResponse();

			return response;
		}

		public Task<CancelOrderResponse> CancelOrderAsync(CancelOrderRequest request)
		{


			return null;
		}

		#region Private methods

		private async Task<dynamic> MakePrivateCallAsync(string url)
		{
			var nonce = Guid.NewGuid().ToString("N");
			string hash = Convert.ToBase64String(MD5.Create().ComputeHash(Encoding.UTF8.GetBytes(String.Empty)));
			Uri uri = BuildUrl(_settings.PrivateUrl, "SubmitTrade");
			var rawData = String.Concat(_settings.ApiKey, "POST", uri.ToString(), nonce, hash);
			string signature = HttpHelper.GetHash(HMACSHA256.Create(), _settings.Secret, rawData);
			SetHeaders(new Dictionary<string, string> { { "amx", $"{_settings.ApiKey}:{signature}:{nonce}" } });
			var content = await CallAsync<dynamic>(HttpMethod.Post, uri, new StringContent(String.Empty));

			return CallAsync<dynamic>(HttpMethod.Post, BuildUrl(_settings.PrivateUrl, url));
		}

		protected override async void HandleError(HttpResponseMessage response)
		{
			var content = await HttpHelper.AcquireContentAsync<ResponseModel>(response);

			if (!String.IsNullOrEmpty(content.Error))
			{
				throw new HttpRequestException(content.Error);
			}
		}

		#endregion
	}
}