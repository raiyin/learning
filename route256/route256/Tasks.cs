using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace route256
{
    internal class Tasks
    {
        static void SumOfTwo(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            List<string> list = new List<string>();
            for (int i = 0; i < count; i++)
            {
                list.Add(Console.ReadLine());
            }

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine(list[i].Split(new char[] { ' ' }).Select(item => int.Parse(item)).Sum());
            }
        }

        static void PaySum(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            List<Dictionary<int, int>> prices = new List<Dictionary<int, int>>();

            for (int i = 0; i < count; i++)
            {
                int pricesCount = int.Parse(Console.ReadLine());
                prices.Add(new Dictionary<int, int>());
                var parts = Console.ReadLine().Split(new char[] { ' ' }).Select(item => int.Parse(item));
                foreach (var part in parts)
                {
                    if (!prices[i].ContainsKey(part))
                    {
                        prices[i].Add(part, 1);
                    }
                    else
                    {
                        prices[i][part]++;
                    }
                }
            }

            for (int i = 0; i < count; i++)
            {
                int sum = 0;
                foreach (var key in prices[i].Keys)
                {
                    sum += prices[i][key] / 3 * 2 * key + (prices[i][key] % 3) * key;
                }
                Console.WriteLine(sum);
            }
        }

        private void Stikler()
        {
            string inString = Console.ReadLine();
            int strCount = int.Parse(Console.ReadLine());
            for (int i = 0; i < strCount; i++)
            {
                var sticker = Console.ReadLine().Split(new char[] { ' ' });
                int start = int.Parse(sticker[0]);
                int end = int.Parse(sticker[1]);
                inString = inString.Remove(start - 1, end - start + 1);
                inString = inString.Insert(start - 1, sticker[2]);
            }
            Console.WriteLine(inString);
        }

        private void Condi()
        {
            int setCount = int.Parse(Console.ReadLine());
            var temp = new List<List<int>>();
            for (int i = 0; i < setCount; i++)
            {
                temp.Add(new List<int>());
                int employeeCount = int.Parse(Console.ReadLine());
                int start = 15;
                int end = 30;
                for (int j = 0; j < employeeCount; j++)
                {
                    var empInput = Console.ReadLine().Split(new char[] { ' ' });
                    int tempValue = int.Parse(empInput[1]);
                    if (empInput[0] == ">=" && start < tempValue)
                    {
                        start = tempValue;
                    }
                    else if (empInput[0] == "<=" && tempValue < end)
                    {
                        end = tempValue;
                    }


                    if (start <= end)
                    {
                        temp[i].Add((start + end) / 2);
                    }
                    else
                    {
                        temp[i].Add(-1);
                    }
                }
            }

            // Output.
            for (int i = 0; i < setCount; i++)
            {
                for (int j = 0; j < temp[i].Count; j++)
                {
                    Console.WriteLine(temp[i][j]);
                }
                Console.WriteLine();
            }
        }
    }
}
