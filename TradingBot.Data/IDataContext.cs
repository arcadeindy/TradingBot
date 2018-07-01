﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace TradingBot.Data
{
	public interface IDataContext : IDisposable
	{
		EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
		DbSet<TEntity> Set<TEntity>() where TEntity : class;
		Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
	}
}