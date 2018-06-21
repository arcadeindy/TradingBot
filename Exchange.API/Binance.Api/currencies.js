﻿{
	"timezone": "UTC",
		"serverTime": 1529577246185,
			"rateLimits": [
				{
					"rateLimitType": "REQUESTS",
					"interval": "MINUTE",
					"limit": 1200
				},
				{
					"rateLimitType": "ORDERS",
					"interval": "SECOND",
					"limit": 10
				},
				{
					"rateLimitType": "ORDERS",
					"interval": "DAY",
					"limit": 100000
				}
			],
				"exchangeFilters": [],
					"symbols": [
						{
							"symbol": "ETHBTC",
							"status": "TRADING",
							"baseAsset": "ETH",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "100000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LTCBTC",
							"status": "TRADING",
							"baseAsset": "LTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "100000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BNBBTC",
							"status": "TRADING",
							"baseAsset": "BNB",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NEOBTC",
							"status": "TRADING",
							"baseAsset": "NEO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "100000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "QTUMETH",
							"status": "TRADING",
							"baseAsset": "QTUM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "EOSETH",
							"status": "TRADING",
							"baseAsset": "EOS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SNTETH",
							"status": "TRADING",
							"baseAsset": "SNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BNTETH",
							"status": "TRADING",
							"baseAsset": "BNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BCCBTC",
							"status": "TRADING",
							"baseAsset": "BCC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "100000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "GASBTC",
							"status": "TRADING",
							"baseAsset": "GAS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "100000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BNBETH",
							"status": "TRADING",
							"baseAsset": "BNB",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BTCUSDT",
							"status": "TRADING",
							"baseAsset": "BTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.01000000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.01000000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00000100",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00000100"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "ETHUSDT",
							"status": "TRADING",
							"baseAsset": "ETH",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.01000000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.01000000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00001000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00001000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "HSRBTC",
							"status": "TRADING",
							"baseAsset": "HSR",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "OAXETH",
							"status": "TRADING",
							"baseAsset": "OAX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "DNTETH",
							"status": "TRADING",
							"baseAsset": "DNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "MCOETH",
							"status": "TRADING",
							"baseAsset": "MCO",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ICNETH",
							"status": "TRADING",
							"baseAsset": "ICN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "MCOBTC",
							"status": "TRADING",
							"baseAsset": "MCO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WTCBTC",
							"status": "TRADING",
							"baseAsset": "WTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WTCETH",
							"status": "TRADING",
							"baseAsset": "WTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "LRCBTC",
							"status": "TRADING",
							"baseAsset": "LRC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LRCETH",
							"status": "TRADING",
							"baseAsset": "LRC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "QTUMBTC",
							"status": "TRADING",
							"baseAsset": "QTUM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "YOYOBTC",
							"status": "TRADING",
							"baseAsset": "YOYO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "OMGBTC",
							"status": "TRADING",
							"baseAsset": "OMG",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "OMGETH",
							"status": "TRADING",
							"baseAsset": "OMG",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ZRXBTC",
							"status": "TRADING",
							"baseAsset": "ZRX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ZRXETH",
							"status": "TRADING",
							"baseAsset": "ZRX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "STRATBTC",
							"status": "TRADING",
							"baseAsset": "STRAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "STRATETH",
							"status": "TRADING",
							"baseAsset": "STRAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SNGLSBTC",
							"status": "TRADING",
							"baseAsset": "SNGLS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SNGLSETH",
							"status": "TRADING",
							"baseAsset": "SNGLS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BQXBTC",
							"status": "TRADING",
							"baseAsset": "BQX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BQXETH",
							"status": "TRADING",
							"baseAsset": "BQX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "KNCBTC",
							"status": "TRADING",
							"baseAsset": "KNC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "KNCETH",
							"status": "TRADING",
							"baseAsset": "KNC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "FUNBTC",
							"status": "TRADING",
							"baseAsset": "FUN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "FUNETH",
							"status": "TRADING",
							"baseAsset": "FUN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SNMBTC",
							"status": "TRADING",
							"baseAsset": "SNM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SNMETH",
							"status": "TRADING",
							"baseAsset": "SNM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NEOETH",
							"status": "TRADING",
							"baseAsset": "NEO",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "IOTABTC",
							"status": "TRADING",
							"baseAsset": "IOTA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "IOTAETH",
							"status": "TRADING",
							"baseAsset": "IOTA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "LINKBTC",
							"status": "TRADING",
							"baseAsset": "LINK",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LINKETH",
							"status": "TRADING",
							"baseAsset": "LINK",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "XVGBTC",
							"status": "TRADING",
							"baseAsset": "XVG",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "XVGETH",
							"status": "TRADING",
							"baseAsset": "XVG",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SALTBTC",
							"status": "TRADING",
							"baseAsset": "SALT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SALTETH",
							"status": "TRADING",
							"baseAsset": "SALT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "MDABTC",
							"status": "TRADING",
							"baseAsset": "MDA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "MDAETH",
							"status": "TRADING",
							"baseAsset": "MDA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "MTLBTC",
							"status": "TRADING",
							"baseAsset": "MTL",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "MTLETH",
							"status": "TRADING",
							"baseAsset": "MTL",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SUBBTC",
							"status": "TRADING",
							"baseAsset": "SUB",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SUBETH",
							"status": "TRADING",
							"baseAsset": "SUB",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "EOSBTC",
							"status": "TRADING",
							"baseAsset": "EOS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SNTBTC",
							"status": "TRADING",
							"baseAsset": "SNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ETCETH",
							"status": "TRADING",
							"baseAsset": "ETC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ETCBTC",
							"status": "TRADING",
							"baseAsset": "ETC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "MTHBTC",
							"status": "TRADING",
							"baseAsset": "MTH",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "MTHETH",
							"status": "TRADING",
							"baseAsset": "MTH",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ENGBTC",
							"status": "TRADING",
							"baseAsset": "ENG",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ENGETH",
							"status": "TRADING",
							"baseAsset": "ENG",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "DNTBTC",
							"status": "TRADING",
							"baseAsset": "DNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ZECBTC",
							"status": "TRADING",
							"baseAsset": "ZEC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ZECETH",
							"status": "TRADING",
							"baseAsset": "ZEC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BNTBTC",
							"status": "TRADING",
							"baseAsset": "BNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ASTBTC",
							"status": "TRADING",
							"baseAsset": "AST",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ASTETH",
							"status": "TRADING",
							"baseAsset": "AST",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "DASHBTC",
							"status": "TRADING",
							"baseAsset": "DASH",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "DASHETH",
							"status": "TRADING",
							"baseAsset": "DASH",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "OAXBTC",
							"status": "TRADING",
							"baseAsset": "OAX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ICNBTC",
							"status": "TRADING",
							"baseAsset": "ICN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BTGBTC",
							"status": "TRADING",
							"baseAsset": "BTG",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BTGETH",
							"status": "TRADING",
							"baseAsset": "BTG",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "EVXBTC",
							"status": "TRADING",
							"baseAsset": "EVX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "EVXETH",
							"status": "TRADING",
							"baseAsset": "EVX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "REQBTC",
							"status": "TRADING",
							"baseAsset": "REQ",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "REQETH",
							"status": "TRADING",
							"baseAsset": "REQ",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "VIBBTC",
							"status": "TRADING",
							"baseAsset": "VIB",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "VIBETH",
							"status": "TRADING",
							"baseAsset": "VIB",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "HSRETH",
							"status": "TRADING",
							"baseAsset": "HSR",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "TRXBTC",
							"status": "TRADING",
							"baseAsset": "TRX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "TRXETH",
							"status": "TRADING",
							"baseAsset": "TRX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "POWRBTC",
							"status": "TRADING",
							"baseAsset": "POWR",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "POWRETH",
							"status": "TRADING",
							"baseAsset": "POWR",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ARKBTC",
							"status": "TRADING",
							"baseAsset": "ARK",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ARKETH",
							"status": "TRADING",
							"baseAsset": "ARK",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "YOYOETH",
							"status": "TRADING",
							"baseAsset": "YOYO",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "XRPBTC",
							"status": "TRADING",
							"baseAsset": "XRP",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "XRPETH",
							"status": "TRADING",
							"baseAsset": "XRP",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "MODBTC",
							"status": "TRADING",
							"baseAsset": "MOD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "MODETH",
							"status": "TRADING",
							"baseAsset": "MOD",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ENJBTC",
							"status": "TRADING",
							"baseAsset": "ENJ",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ENJETH",
							"status": "TRADING",
							"baseAsset": "ENJ",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "STORJBTC",
							"status": "TRADING",
							"baseAsset": "STORJ",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "STORJETH",
							"status": "TRADING",
							"baseAsset": "STORJ",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BNBUSDT",
							"status": "TRADING",
							"baseAsset": "BNB",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "VENBNB",
							"status": "TRADING",
							"baseAsset": "VEN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "YOYOBNB",
							"status": "TRADING",
							"baseAsset": "YOYO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "POWRBNB",
							"status": "TRADING",
							"baseAsset": "POWR",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "VENBTC",
							"status": "TRADING",
							"baseAsset": "VEN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "VENETH",
							"status": "TRADING",
							"baseAsset": "VEN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "KMDBTC",
							"status": "TRADING",
							"baseAsset": "KMD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "KMDETH",
							"status": "TRADING",
							"baseAsset": "KMD",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NULSBNB",
							"status": "TRADING",
							"baseAsset": "NULS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "RCNBTC",
							"status": "TRADING",
							"baseAsset": "RCN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "RCNETH",
							"status": "TRADING",
							"baseAsset": "RCN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "RCNBNB",
							"status": "TRADING",
							"baseAsset": "RCN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "NULSBTC",
							"status": "TRADING",
							"baseAsset": "NULS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NULSETH",
							"status": "TRADING",
							"baseAsset": "NULS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "RDNBTC",
							"status": "TRADING",
							"baseAsset": "RDN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "RDNETH",
							"status": "TRADING",
							"baseAsset": "RDN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "RDNBNB",
							"status": "TRADING",
							"baseAsset": "RDN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "XMRBTC",
							"status": "TRADING",
							"baseAsset": "XMR",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "XMRETH",
							"status": "TRADING",
							"baseAsset": "XMR",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "DLTBNB",
							"status": "TRADING",
							"baseAsset": "DLT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "WTCBNB",
							"status": "TRADING",
							"baseAsset": "WTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "DLTBTC",
							"status": "TRADING",
							"baseAsset": "DLT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "DLTETH",
							"status": "TRADING",
							"baseAsset": "DLT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AMBBTC",
							"status": "TRADING",
							"baseAsset": "AMB",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "AMBETH",
							"status": "TRADING",
							"baseAsset": "AMB",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AMBBNB",
							"status": "TRADING",
							"baseAsset": "AMB",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "BCCETH",
							"status": "TRADING",
							"baseAsset": "BCC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BCCUSDT",
							"status": "TRADING",
							"baseAsset": "BCC",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.01000000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.01000000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00001000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00001000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "BCCBNB",
							"status": "TRADING",
							"baseAsset": "BCC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.01000000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.01000000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00001000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00001000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "BATBTC",
							"status": "TRADING",
							"baseAsset": "BAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BATETH",
							"status": "TRADING",
							"baseAsset": "BAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BATBNB",
							"status": "TRADING",
							"baseAsset": "BAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "BCPTBTC",
							"status": "TRADING",
							"baseAsset": "BCPT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BCPTETH",
							"status": "TRADING",
							"baseAsset": "BCPT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BCPTBNB",
							"status": "TRADING",
							"baseAsset": "BCPT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ARNBTC",
							"status": "TRADING",
							"baseAsset": "ARN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ARNETH",
							"status": "TRADING",
							"baseAsset": "ARN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "GVTBTC",
							"status": "TRADING",
							"baseAsset": "GVT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "GVTETH",
							"status": "TRADING",
							"baseAsset": "GVT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "CDTBTC",
							"status": "TRADING",
							"baseAsset": "CDT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "CDTETH",
							"status": "TRADING",
							"baseAsset": "CDT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "GXSBTC",
							"status": "TRADING",
							"baseAsset": "GXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "GXSETH",
							"status": "TRADING",
							"baseAsset": "GXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NEOUSDT",
							"status": "TRADING",
							"baseAsset": "NEO",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "NEOBNB",
							"status": "TRADING",
							"baseAsset": "NEO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "POEBTC",
							"status": "TRADING",
							"baseAsset": "POE",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "POEETH",
							"status": "TRADING",
							"baseAsset": "POE",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "QSPBTC",
							"status": "TRADING",
							"baseAsset": "QSP",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "QSPETH",
							"status": "TRADING",
							"baseAsset": "QSP",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "QSPBNB",
							"status": "TRADING",
							"baseAsset": "QSP",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "BTSBTC",
							"status": "TRADING",
							"baseAsset": "BTS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BTSETH",
							"status": "TRADING",
							"baseAsset": "BTS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BTSBNB",
							"status": "TRADING",
							"baseAsset": "BTS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "XZCBTC",
							"status": "TRADING",
							"baseAsset": "XZC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "XZCETH",
							"status": "TRADING",
							"baseAsset": "XZC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "XZCBNB",
							"status": "TRADING",
							"baseAsset": "XZC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "LSKBTC",
							"status": "TRADING",
							"baseAsset": "LSK",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LSKETH",
							"status": "TRADING",
							"baseAsset": "LSK",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "LSKBNB",
							"status": "TRADING",
							"baseAsset": "LSK",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "TNTBTC",
							"status": "TRADING",
							"baseAsset": "TNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "TNTETH",
							"status": "TRADING",
							"baseAsset": "TNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "FUELBTC",
							"status": "TRADING",
							"baseAsset": "FUEL",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "FUELETH",
							"status": "TRADING",
							"baseAsset": "FUEL",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "MANABTC",
							"status": "TRADING",
							"baseAsset": "MANA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "MANAETH",
							"status": "TRADING",
							"baseAsset": "MANA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BCDBTC",
							"status": "TRADING",
							"baseAsset": "BCD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BCDETH",
							"status": "TRADING",
							"baseAsset": "BCD",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "DGDBTC",
							"status": "TRADING",
							"baseAsset": "DGD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "DGDETH",
							"status": "TRADING",
							"baseAsset": "DGD",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "IOTABNB",
							"status": "TRADING",
							"baseAsset": "IOTA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ADXBTC",
							"status": "TRADING",
							"baseAsset": "ADX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ADXETH",
							"status": "TRADING",
							"baseAsset": "ADX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ADXBNB",
							"status": "TRADING",
							"baseAsset": "ADX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ADABTC",
							"status": "TRADING",
							"baseAsset": "ADA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ADAETH",
							"status": "TRADING",
							"baseAsset": "ADA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "PPTBTC",
							"status": "TRADING",
							"baseAsset": "PPT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "PPTETH",
							"status": "TRADING",
							"baseAsset": "PPT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "CMTBTC",
							"status": "TRADING",
							"baseAsset": "CMT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "CMTETH",
							"status": "TRADING",
							"baseAsset": "CMT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "CMTBNB",
							"status": "TRADING",
							"baseAsset": "CMT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "XLMBTC",
							"status": "TRADING",
							"baseAsset": "XLM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "XLMETH",
							"status": "TRADING",
							"baseAsset": "XLM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "XLMBNB",
							"status": "TRADING",
							"baseAsset": "XLM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "CNDBTC",
							"status": "TRADING",
							"baseAsset": "CND",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "CNDETH",
							"status": "TRADING",
							"baseAsset": "CND",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "CNDBNB",
							"status": "TRADING",
							"baseAsset": "CND",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "LENDBTC",
							"status": "TRADING",
							"baseAsset": "LEND",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LENDETH",
							"status": "TRADING",
							"baseAsset": "LEND",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "WABIBTC",
							"status": "TRADING",
							"baseAsset": "WABI",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WABIETH",
							"status": "TRADING",
							"baseAsset": "WABI",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "WABIBNB",
							"status": "TRADING",
							"baseAsset": "WABI",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "LTCETH",
							"status": "TRADING",
							"baseAsset": "LTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "LTCUSDT",
							"status": "TRADING",
							"baseAsset": "LTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.01000000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.01000000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00001000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00001000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "LTCBNB",
							"status": "TRADING",
							"baseAsset": "LTC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.01000000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.01000000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00001000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00001000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "TNBBTC",
							"status": "TRADING",
							"baseAsset": "TNB",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "TNBETH",
							"status": "TRADING",
							"baseAsset": "TNB",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "WAVESBTC",
							"status": "TRADING",
							"baseAsset": "WAVES",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WAVESETH",
							"status": "TRADING",
							"baseAsset": "WAVES",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "WAVESBNB",
							"status": "TRADING",
							"baseAsset": "WAVES",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "GTOBTC",
							"status": "TRADING",
							"baseAsset": "GTO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "GTOETH",
							"status": "TRADING",
							"baseAsset": "GTO",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "GTOBNB",
							"status": "TRADING",
							"baseAsset": "GTO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ICXBTC",
							"status": "TRADING",
							"baseAsset": "ICX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ICXETH",
							"status": "TRADING",
							"baseAsset": "ICX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ICXBNB",
							"status": "TRADING",
							"baseAsset": "ICX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "OSTBTC",
							"status": "TRADING",
							"baseAsset": "OST",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "OSTETH",
							"status": "TRADING",
							"baseAsset": "OST",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "OSTBNB",
							"status": "TRADING",
							"baseAsset": "OST",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ELFBTC",
							"status": "TRADING",
							"baseAsset": "ELF",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ELFETH",
							"status": "TRADING",
							"baseAsset": "ELF",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AIONBTC",
							"status": "TRADING",
							"baseAsset": "AION",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "AIONETH",
							"status": "TRADING",
							"baseAsset": "AION",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AIONBNB",
							"status": "TRADING",
							"baseAsset": "AION",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "NEBLBTC",
							"status": "TRADING",
							"baseAsset": "NEBL",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NEBLETH",
							"status": "TRADING",
							"baseAsset": "NEBL",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NEBLBNB",
							"status": "TRADING",
							"baseAsset": "NEBL",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "BRDBTC",
							"status": "TRADING",
							"baseAsset": "BRD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BRDETH",
							"status": "TRADING",
							"baseAsset": "BRD",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BRDBNB",
							"status": "TRADING",
							"baseAsset": "BRD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "MCOBNB",
							"status": "TRADING",
							"baseAsset": "MCO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "EDOBTC",
							"status": "TRADING",
							"baseAsset": "EDO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "EDOETH",
							"status": "TRADING",
							"baseAsset": "EDO",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "WINGSBTC",
							"status": "TRADING",
							"baseAsset": "WINGS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WINGSETH",
							"status": "TRADING",
							"baseAsset": "WINGS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NAVBTC",
							"status": "TRADING",
							"baseAsset": "NAV",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NAVETH",
							"status": "TRADING",
							"baseAsset": "NAV",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NAVBNB",
							"status": "TRADING",
							"baseAsset": "NAV",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "LUNBTC",
							"status": "TRADING",
							"baseAsset": "LUN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LUNETH",
							"status": "TRADING",
							"baseAsset": "LUN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "TRIGBTC",
							"status": "TRADING",
							"baseAsset": "TRIG",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "TRIGETH",
							"status": "TRADING",
							"baseAsset": "TRIG",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "TRIGBNB",
							"status": "TRADING",
							"baseAsset": "TRIG",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "APPCBTC",
							"status": "TRADING",
							"baseAsset": "APPC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "APPCETH",
							"status": "TRADING",
							"baseAsset": "APPC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "APPCBNB",
							"status": "TRADING",
							"baseAsset": "APPC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "VIBEBTC",
							"status": "TRADING",
							"baseAsset": "VIBE",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "VIBEETH",
							"status": "TRADING",
							"baseAsset": "VIBE",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "RLCBTC",
							"status": "TRADING",
							"baseAsset": "RLC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "RLCETH",
							"status": "TRADING",
							"baseAsset": "RLC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "RLCBNB",
							"status": "TRADING",
							"baseAsset": "RLC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "INSBTC",
							"status": "TRADING",
							"baseAsset": "INS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "INSETH",
							"status": "TRADING",
							"baseAsset": "INS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "PIVXBTC",
							"status": "TRADING",
							"baseAsset": "PIVX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "PIVXETH",
							"status": "TRADING",
							"baseAsset": "PIVX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "PIVXBNB",
							"status": "TRADING",
							"baseAsset": "PIVX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "IOSTBTC",
							"status": "TRADING",
							"baseAsset": "IOST",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "IOSTETH",
							"status": "TRADING",
							"baseAsset": "IOST",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "CHATBTC",
							"status": "TRADING",
							"baseAsset": "CHAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "CHATETH",
							"status": "TRADING",
							"baseAsset": "CHAT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "STEEMBTC",
							"status": "TRADING",
							"baseAsset": "STEEM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "STEEMETH",
							"status": "TRADING",
							"baseAsset": "STEEM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "STEEMBNB",
							"status": "TRADING",
							"baseAsset": "STEEM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "NANOBTC",
							"status": "TRADING",
							"baseAsset": "NANO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NANOETH",
							"status": "TRADING",
							"baseAsset": "NANO",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NANOBNB",
							"status": "TRADING",
							"baseAsset": "NANO",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "VIABTC",
							"status": "TRADING",
							"baseAsset": "VIA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "VIAETH",
							"status": "TRADING",
							"baseAsset": "VIA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "VIABNB",
							"status": "TRADING",
							"baseAsset": "VIA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "BLZBTC",
							"status": "TRADING",
							"baseAsset": "BLZ",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BLZETH",
							"status": "TRADING",
							"baseAsset": "BLZ",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BLZBNB",
							"status": "TRADING",
							"baseAsset": "BLZ",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "AEBTC",
							"status": "TRADING",
							"baseAsset": "AE",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "AEETH",
							"status": "TRADING",
							"baseAsset": "AE",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AEBNB",
							"status": "TRADING",
							"baseAsset": "AE",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "RPXBTC",
							"status": "TRADING",
							"baseAsset": "RPX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "RPXETH",
							"status": "TRADING",
							"baseAsset": "RPX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "RPXBNB",
							"status": "TRADING",
							"baseAsset": "RPX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "NCASHBTC",
							"status": "TRADING",
							"baseAsset": "NCASH",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NCASHETH",
							"status": "TRADING",
							"baseAsset": "NCASH",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NCASHBNB",
							"status": "TRADING",
							"baseAsset": "NCASH",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "POABTC",
							"status": "TRADING",
							"baseAsset": "POA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "POAETH",
							"status": "TRADING",
							"baseAsset": "POA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "POABNB",
							"status": "TRADING",
							"baseAsset": "POA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ZILBTC",
							"status": "TRADING",
							"baseAsset": "ZIL",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ZILETH",
							"status": "TRADING",
							"baseAsset": "ZIL",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ZILBNB",
							"status": "TRADING",
							"baseAsset": "ZIL",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ONTBTC",
							"status": "TRADING",
							"baseAsset": "ONT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ONTETH",
							"status": "TRADING",
							"baseAsset": "ONT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ONTBNB",
							"status": "TRADING",
							"baseAsset": "ONT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "STORMBTC",
							"status": "TRADING",
							"baseAsset": "STORM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "STORMETH",
							"status": "TRADING",
							"baseAsset": "STORM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "STORMBNB",
							"status": "TRADING",
							"baseAsset": "STORM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "QTUMBNB",
							"status": "TRADING",
							"baseAsset": "QTUM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "QTUMUSDT",
							"status": "TRADING",
							"baseAsset": "QTUM",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "XEMBTC",
							"status": "TRADING",
							"baseAsset": "XEM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "XEMETH",
							"status": "TRADING",
							"baseAsset": "XEM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "XEMBNB",
							"status": "TRADING",
							"baseAsset": "XEM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "WANBTC",
							"status": "TRADING",
							"baseAsset": "WAN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WANETH",
							"status": "TRADING",
							"baseAsset": "WAN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "WANBNB",
							"status": "TRADING",
							"baseAsset": "WAN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "WPRBTC",
							"status": "TRADING",
							"baseAsset": "WPR",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "WPRETH",
							"status": "TRADING",
							"baseAsset": "WPR",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "QLCBTC",
							"status": "TRADING",
							"baseAsset": "QLC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "QLCETH",
							"status": "TRADING",
							"baseAsset": "QLC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SYSBTC",
							"status": "TRADING",
							"baseAsset": "SYS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SYSETH",
							"status": "TRADING",
							"baseAsset": "SYS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SYSBNB",
							"status": "TRADING",
							"baseAsset": "SYS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "QLCBNB",
							"status": "TRADING",
							"baseAsset": "QLC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "GRSBTC",
							"status": "TRADING",
							"baseAsset": "GRS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "GRSETH",
							"status": "TRADING",
							"baseAsset": "GRS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ADAUSDT",
							"status": "TRADING",
							"baseAsset": "ADA",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.10000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.10000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "ADABNB",
							"status": "TRADING",
							"baseAsset": "ADA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "CLOAKBTC",
							"status": "TRADING",
							"baseAsset": "CLOAK",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "CLOAKETH",
							"status": "TRADING",
							"baseAsset": "CLOAK",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "GNTBTC",
							"status": "TRADING",
							"baseAsset": "GNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "GNTETH",
							"status": "TRADING",
							"baseAsset": "GNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "GNTBNB",
							"status": "TRADING",
							"baseAsset": "GNT",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "LOOMBTC",
							"status": "TRADING",
							"baseAsset": "LOOM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "LOOMETH",
							"status": "TRADING",
							"baseAsset": "LOOM",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "LOOMBNB",
							"status": "TRADING",
							"baseAsset": "LOOM",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "XRPUSDT",
							"status": "TRADING",
							"baseAsset": "XRP",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.10000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.10000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "BCNBTC",
							"status": "TRADING",
							"baseAsset": "BCN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "BCNETH",
							"status": "TRADING",
							"baseAsset": "BCN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "BCNBNB",
							"status": "TRADING",
							"baseAsset": "BCN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "REPBTC",
							"status": "TRADING",
							"baseAsset": "REP",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "REPETH",
							"status": "TRADING",
							"baseAsset": "REP",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "REPBNB",
							"status": "TRADING",
							"baseAsset": "REP",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "TUSDBTC",
							"status": "TRADING",
							"baseAsset": "TUSD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "TUSDETH",
							"status": "TRADING",
							"baseAsset": "TUSD",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "TUSDBNB",
							"status": "TRADING",
							"baseAsset": "TUSD",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ZENBTC",
							"status": "TRADING",
							"baseAsset": "ZEN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "ZENETH",
							"status": "TRADING",
							"baseAsset": "ZEN",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ZENBNB",
							"status": "TRADING",
							"baseAsset": "ZEN",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "SKYBTC",
							"status": "TRADING",
							"baseAsset": "SKY",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SKYETH",
							"status": "TRADING",
							"baseAsset": "SKY",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SKYBNB",
							"status": "TRADING",
							"baseAsset": "SKY",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "EOSUSDT",
							"status": "TRADING",
							"baseAsset": "EOS",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "EOSBNB",
							"status": "TRADING",
							"baseAsset": "EOS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "CVCBTC",
							"status": "TRADING",
							"baseAsset": "CVC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "CVCETH",
							"status": "TRADING",
							"baseAsset": "CVC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "CVCBNB",
							"status": "TRADING",
							"baseAsset": "CVC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "THETABTC",
							"status": "TRADING",
							"baseAsset": "THETA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "THETAETH",
							"status": "TRADING",
							"baseAsset": "THETA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "THETABNB",
							"status": "TRADING",
							"baseAsset": "THETA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "XRPBNB",
							"status": "TRADING",
							"baseAsset": "XRP",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "TUSDUSDT",
							"status": "TRADING",
							"baseAsset": "TUSD",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "IOTAUSDT",
							"status": "TRADING",
							"baseAsset": "IOTA",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "XLMUSDT",
							"status": "TRADING",
							"baseAsset": "XLM",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "IOTXBTC",
							"status": "TRADING",
							"baseAsset": "IOTX",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "IOTXETH",
							"status": "TRADING",
							"baseAsset": "IOTX",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "QKCBTC",
							"status": "TRADING",
							"baseAsset": "QKC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "QKCETH",
							"status": "TRADING",
							"baseAsset": "QKC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AGIBTC",
							"status": "TRADING",
							"baseAsset": "AGI",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "AGIETH",
							"status": "TRADING",
							"baseAsset": "AGI",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "AGIBNB",
							"status": "TRADING",
							"baseAsset": "AGI",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "NXSBTC",
							"status": "TRADING",
							"baseAsset": "NXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000010",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000010"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NXSETH",
							"status": "TRADING",
							"baseAsset": "NXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "NXSBNB",
							"status": "TRADING",
							"baseAsset": "NXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ENJBNB",
							"status": "TRADING",
							"baseAsset": "ENJ",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "DATABTC",
							"status": "TRADING",
							"baseAsset": "DATA",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "DATAETH",
							"status": "TRADING",
							"baseAsset": "DATA",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "ONTUSDT",
							"status": "TRADING",
							"baseAsset": "ONT",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00100000",
									"maxPrice": "10000000.00000000",
									"tickSize": "0.00100000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.00100000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.00100000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "TRXUSDT",
							"status": "TRADING",
							"baseAsset": "TRX",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00001000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00001000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.10000000",
									"maxQty": "90000000.00000000",
									"stepSize": "0.10000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "ETCUSDT",
							"status": "TRADING",
							"baseAsset": "ETC",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "ETCBNB",
							"status": "TRADING",
							"baseAsset": "ETC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "ICXUSDT",
							"status": "TRADING",
							"baseAsset": "ICX",
							"baseAssetPrecision": 8,
							"quoteAsset": "USDT",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00010000",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00010000"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "0.01000000",
									"maxQty": "10000000.00000000",
									"stepSize": "0.01000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "10.00000000"
								}
							]
						},
						{
							"symbol": "SCBTC",
							"status": "TRADING",
							"baseAsset": "SC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "SCETH",
							"status": "TRADING",
							"baseAsset": "SC",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						},
						{
							"symbol": "SCBNB",
							"status": "TRADING",
							"baseAsset": "SC",
							"baseAssetPrecision": 8,
							"quoteAsset": "BNB",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000100",
									"maxPrice": "10000.00000000",
									"tickSize": "0.00000100"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "1.00000000"
								}
							]
						},
						{
							"symbol": "NPXSBTC",
							"status": "TRADING",
							"baseAsset": "NPXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "BTC",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.00100000"
								}
							]
						},
						{
							"symbol": "NPXSETH",
							"status": "TRADING",
							"baseAsset": "NPXS",
							"baseAssetPrecision": 8,
							"quoteAsset": "ETH",
							"quotePrecision": 8,
							"orderTypes": [
								"LIMIT",
								"LIMIT_MAKER",
								"MARKET",
								"STOP_LOSS_LIMIT",
								"TAKE_PROFIT_LIMIT"
							],
							"icebergAllowed": false,
							"filters": [
								{
									"filterType": "PRICE_FILTER",
									"minPrice": "0.00000001",
									"maxPrice": "100000.00000000",
									"tickSize": "0.00000001"
								},
								{
									"filterType": "LOT_SIZE",
									"minQty": "1.00000000",
									"maxQty": "90000000.00000000",
									"stepSize": "1.00000000"
								},
								{
									"filterType": "MIN_NOTIONAL",
									"minNotional": "0.01000000"
								}
							]
						}
					]
}