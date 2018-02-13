﻿
namespace TradingBot.Data.Entities
{
	public abstract class Entity
	{
		public int Id { get; set; }

		public bool IsNew()
		{
			return Id == 0;
		}
	}
}