﻿using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TradingBot.Common;
using TradingBot.Jobs;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace TradingBot.Web
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});
			services.AddMvc()
					.SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
					.AddControllersAsServices();
			//services.AddSingleton<IHostedService, SomeJob>();
		}

		public void ConfigureContainer(ContainerBuilder builder)
		{
			builder.RegisterType<Logger>().As<ILog>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				//app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
				//{
				//	HotModuleReplacement = true,
				//	ReactHotModuleReplacement = true
				//});
			}
			else
			{
				app.UseExceptionHandler("/Arbitrage/Error");
			}

			app.UseStaticFiles();
			//app.UseCookiePolicy();
			app.UseMvc(routes =>
			{
				routes.MapRoute("default", "{controller=Arbitrage}/{action=Index}/{id?}");
			});
		}
	}
}