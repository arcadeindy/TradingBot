﻿
namespace TradingBot.Data.Entities
{
	using Core.Enums;

	public class Account : Entity
	{
        public string Name { get; set; }
        public ExchangeType ExchangeType { get; set; }
        public string ApiSettings { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
		//public int ClientId { get; set; }
		//public virtual ExchangeClient Client { get; set; }
	}
}