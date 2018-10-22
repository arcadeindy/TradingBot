﻿
namespace TradingBot.Core.Models
{
	public class TradePair //: IEquatable<TradePair>
	{
		public TradePair(Currency baseAsset, Currency quoteAsset)
		{
			BaseAsset = baseAsset;
			QuoteAsset = quoteAsset;
		}

		public string Label => $"{BaseAsset.Symbol}/{QuoteAsset.Symbol}";
		public Currency BaseAsset { get; }
		public Currency QuoteAsset { get; }

		//public string GetSymbol(ExchangeType type)
		//{
		//	switch (type)
		//	{
		//		case ExchangeType.Binance:
		//			{
		//				return (BaseAsset.Symbol + QuoteAsset.Symbol).ToUpper();
		//			}
		//		case ExchangeType.Huobi:
		//		case ExchangeType.Bitfinex:
		//			{
		//				return (BaseAsset.Symbol + QuoteAsset.Symbol).ToLower();
		//			}
		//		case ExchangeType.Exmo:
		//		case ExchangeType.Cryptopia:
		//			{
		//				return $"{BaseAsset.Symbol}_{QuoteAsset.Symbol}".ToUpper();
		//			}
		//		case ExchangeType.Kucoin:
		//			{
		//				return $"{BaseAsset.Symbol}-{QuoteAsset.Symbol}".ToUpper();
		//			}
		//		case ExchangeType.Yobit:
		//		case ExchangeType.Okex:
		//			{
		//				return $"{BaseAsset.Symbol}_{QuoteAsset.Symbol}".ToLower();
		//			}
		//		default:
		//			{
		//				return null;
		//			}
		//	}
		//}

		//public override bool Equals(object obj)
		//{
		//	return Equals((TradePair)obj);
		//}

		//public override int GetHashCode()
		//{
		//	return BaseAsset.Id ^ QuoteAsset.Id;
		//}

		//public bool Equals(TradePair other)
		//{
		//	if (other == null)
		//	{
		//		return false;
		//	}

		//	return BaseAsset.Id == other.BaseAsset.Id && QuoteAsset.Id == other.QuoteAsset.Id;
		//}
	}
}