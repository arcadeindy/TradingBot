﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TradingBot.Core;
using TradingBot.Core.Entities;

namespace TradingBot.CommandPrompt
{
	public class Program
	{
		private static async Task Main(string[] args)
		{


			Console.ReadLine();
		}
	}

	public class ExchangePair
	{
		private readonly IExchangeClient _first;
		private readonly IExchangeClient _second;
		private readonly IEnumerable<Pair> _pairs;

		public ExchangePair(IExchangeClient first, IExchangeClient second)
		{
			_first = first;
			_second = second;
			_pairs = new List<Pair>();
		}

		public void Transfer(string symbol, bool swap)
		{
			if (swap)
			{
				//TODO: Swap exchanges

				return;
			}

			//TODO: Transfer coins from the firs to the second exchange
		}
	}
}