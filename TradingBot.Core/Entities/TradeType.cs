﻿using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace TradingBot.Core.Entities
{
	[JsonConverter(typeof(StringEnumConverter))]
	public enum TradeType : byte
	{
		Buy,
		Sell
	}
}