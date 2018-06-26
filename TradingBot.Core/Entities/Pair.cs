﻿using System;

namespace TradingBot.Core.Entities
{
	public class Pair : IEquatable<Pair>
	{
		public Pair(string symbol)
		{
			Symbol = symbol;
			InnerSymbol = symbol.ToUpper();
		}

		public Pair() : this("") { } //Delete it after refactoring

		private string InnerSymbol { get; }

		public string Symbol { get; }
		public Currency BaseAsset { get; set; }
		public Currency QuoteAsset { get; set; }
		public byte Precision { get; set; }
		public decimal MaxOrderSize { get; set; }
		public decimal MinOrderSize { get; set; }

		public bool Equals(Pair other)
		{
			return other.Symbol.Equals(Symbol, StringComparison.InvariantCultureIgnoreCase);
		}

		public override int GetHashCode()
		{
			return InnerSymbol.GetHashCode();
		}

		public override string ToString()
		{
			if (BaseAsset != null && QuoteAsset != null)
			{
				return $"{BaseAsset.Symbol}/{QuoteAsset.Symbol}";
			}

			return Symbol;
		}

		//Remove it
		public byte DecimalPlaces { get; set; }
		public decimal MinPrice { get; set; }
		public decimal MaxPrice { get; set; }
		public decimal MinAmount { get; set; }
		public decimal MinTotal { get; set; }
		public bool IsHidden { get; set; }
		public decimal Fee { get; set; }
		public decimal FeeBuyer { get; set; }
		public decimal FeeSeller { get; set; }
	}
}