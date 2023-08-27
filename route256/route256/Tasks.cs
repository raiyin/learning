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
    }
}
