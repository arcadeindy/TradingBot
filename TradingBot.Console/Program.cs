﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradingBot.Domain;

namespace TradingBot.Cmd
{
    class Program
    {
        static List<Command> commands;

        static Program()
        {
            commands = new List<Command>();

            commands.Add(Command.None);

            commands.Add(new Command
            {
                Type = CommandEnum.Exit,
                Aliases = new List<string> { "exit", "e", "finish", "esc" }
            });

            commands.Add(new Command
            {
                Type = CommandEnum.Help,
                Aliases = new List<string> { "help", "h", "?" }
            });

            commands.Add(new Command
            {
                Type = CommandEnum.RegisterUser,
                Aliases = new List<string> { "register", "signup", "create-user" }
            });

            commands.Add(new Command
            {
                Type = CommandEnum.Login,
                Aliases = new List<string> { "login", "signin", "let-me-enter", "authorization" }
            });
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Use /help to get list of commands");
            var input = "";
            var command = Command.None;
            do
            {
                input = Console.ReadLine().ToLowerInvariant().Trim();
                if (input.Length < 1 || input[0] != '/')
                    continue;
                input = input.Substring(1);
                var parts = input.Split(' ');

                command = commands.FirstOrDefault(m => m.Aliases.Contains(parts[0]));
                if (command == null)
                    command = Command.None;

                switch (command.Type)
                {
                    case CommandEnum.Help:
                        Console.WriteLine("Available commands: " +
                            string.Join("\n\r", commands.Where(m => m.Type != CommandEnum.None)
                            .Select(m => m.Info)));
                        break;
                    case CommandEnum.RegisterUser:
                        RegisterUser(parts.Skip(1).ToArray());
                        break;
                    case CommandEnum.Login:
                        LoginUser(parts.Skip(1).ToArray());
                        break;
                }
            }
            while (command.Type != CommandEnum.Exit);

            Console.Write("You are finished. Thanks");
            Console.ReadLine();
        }


        private static bool RegisterUser(params string[] list)
        {
            if (list.Length != 2)
            {
                Console.WriteLine("You must enter your username and password");
                return false;
            }

            using (var usrService = new UserService())
            {
                var usr = usrService.RegisterUser(list[0].Trim(), list[1].Trim());
                if (usr == null)
                {
                    Console.WriteLine("Such username already registered");
                    return false;
                }

                Console.WriteLine("Registration complete");

                return true;
            }
        }

        private static bool LoginUser(params string[] list)
        {
            if (list.Length != 2)
            {
                Console.WriteLine("You must enter your username and password");
                return false;
            }

            using (var usrService = new UserService())
            {
                var usr = usrService.AuthenticateUser(list[0].Trim(), list[1].Trim());
                if (usr == null)
                {
                    Console.WriteLine("Incorrect username or password");
                    return false;
                }

                Console.WriteLine("It's correct");

                return true;
            }
        }
    }
}
