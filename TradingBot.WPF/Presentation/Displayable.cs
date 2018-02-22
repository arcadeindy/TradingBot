﻿
namespace TradingBot.WPF.Presentation
{
	/// <summary>
	/// Provides a base implementation for objects that are displayed in the UI.
	/// </summary>
	public abstract class Displayable : NotifyPropertyChanged
	{
		private string _displayName;

		/// <summary>
		/// Gets or sets the display name.
		/// </summary>
		/// <value>The display name.</value>
		public string DisplayName
		{
			get
			{
				return _displayName;
			}

			set
			{
				if (_displayName != value)
				{
					_displayName = value;
					OnPropertyChanged("DisplayName");
				}
			}
		}
	}
}