﻿
namespace TradingBot.Core.Entities
{
	using System;

	public class OrderInfo
	{
		public string Pair { get; set; }
		public Side Type { get; set; }
		public decimal StartAmount { get; set; }
		public decimal Amount { get; set; }
		public decimal Price { get; set; }
		public DateTimeOffset CreatedAt { get; set; }
		public OrderStatus Status { get; set; }
	}
}