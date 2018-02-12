﻿
namespace TradingBot.Core
{
	using Data.Enums;
	using System;
	using System.Net.Http;

	public abstract class PairsResponse<T>
	{
		public bool IsSuccess { get; set; }

		public string Error { get; set; }

		public T Data { get; set; }

		public PairsResponse(T data)
		{
			IsSuccess = true;
			Data = data;
		}

		public PairsResponse(string error)
		{
			IsSuccess = true;
			Error = error;
		}
	}

	public abstract class ExchangeApi : IDisposable
	{
		public AccountType Type { get; protected set; }

		protected readonly HttpClient HttpClient = new HttpClient();

		protected ExchangeApi(string baseAddress)
		{
			HttpClient.BaseAddress = new Uri(baseAddress);
			HttpClient.DefaultRequestHeaders.ConnectionClose = false;
		}

		protected virtual void Dispose(bool disposing)
		{
			if (disposing)
			{
				HttpClient.Dispose();
			}
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		//public abstract PairsResponse<T> GetPairs<T>();
	}
}