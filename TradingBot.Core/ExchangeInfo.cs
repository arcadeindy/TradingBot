﻿
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TradingBot.Domain;

namespace TradingBot.Core
{
    public class ExchangeInfo
    {
        private static string accountTypes { get; set; }
        public static string GetAccountTypes
        {
            get
            {
                if (string.IsNullOrWhiteSpace(accountTypes))
                {
                    accountTypes = string.Join(", ", Exchanges.Select(m => string.Format("{0}-{1}", (int)m.Key, m.Key.ToString())));
                }
                return accountTypes;
            }
        }

        public static Dictionary<AccountTypeEnum, ExchangeInfo> Exchanges { get; set; }

        static ExchangeInfo()
        {
            Exchanges = new Dictionary<AccountTypeEnum, ExchangeInfo>();
            Exchanges.Add(AccountTypeEnum.Yobit, new ExchangeInfo(AccountTypeEnum.Yobit, "https://yobit.net/api/3/"));
            Exchanges.Add(AccountTypeEnum.Bitfinex, new ExchangeInfo(AccountTypeEnum.Bitfinex, "https://api.bitfinex.com/v2/"));
        }

        public AccountTypeEnum Type { get; set; }
        
        public string BasicUrl { get; set; }

        public ExchangeInfo(AccountTypeEnum type, string basicUrl)
        {
            Type = type;
            BasicUrl = basicUrl;
        }
    }

}