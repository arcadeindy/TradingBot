﻿namespace TradingBot.WPF.Win32
{
	using System.Runtime.InteropServices;

	[StructLayout(LayoutKind.Sequential)]
	internal struct RECT
	{
		public int left, top, right, bottom;
	}
}