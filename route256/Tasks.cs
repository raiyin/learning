using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace route256
{
    internal class Tasks
    {
        static void SeaBattle()
        {
            int setLength = int.Parse(Console.ReadLine());
            List<string> unswerList = new List<string>();
            Dictionary<string, int> ships = new Dictionary<string, int>();

            for (int i = 0; i < setLength; i++)
            {
                ships.Clear();
                ships.Add("1", 0);
                ships.Add("2", 0);
                ships.Add("3", 0);
                ships.Add("4", 0);

                var shipsStrings = Console.ReadLine().Split(' ');
                foreach (string s in shipsStrings)
                {
                    ships[s] = ships[s] + 1;
                }

                string currentUnswer = (ships["1"] == 4 && ships["2"] == 3 && ships["3"] == 2 && ships["4"] == 1) ? "YES" : "NO";
                unswerList.Add(currentUnswer);
            }
            foreach (string s in unswerList)
            {
                Console.WriteLine(s);
            }
        }

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

        private void Ascii_mounts()
        {
            int setCount = int.Parse(Console.ReadLine());
            List<List<string>> resultReliefs = new List<List<string>>();

            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                List<List<string>> reliefs = new List<List<string>>();
                var inParams = Console.ReadLine().Split(new char[] { ' ' });
                int reliefCount = int.Parse(inParams[0]);
                int height = int.Parse(inParams[1]);
                int width = int.Parse(inParams[2]);

                for (int reliefIndex = 0; reliefIndex < reliefCount; reliefIndex++)
                {
                    reliefs.Add(new List<string>());
                    for (int j = 0; j < height; j++)
                    {
                        reliefs[reliefs.Count - 1].Add(Console.ReadLine());
                    }

                    if (reliefIndex < reliefCount - 1)
                    {
                        Console.ReadLine();
                    }
                }

                // Initialize pattern;
                List<string> resultRelief = new List<string>();
                for (int strIndex = 0; strIndex < height; strIndex++)
                {
                    resultRelief.Add(new string('.', width));
                }

                // Process.
                for (int reliefIndex = reliefCount - 1; reliefIndex >= 0; reliefIndex--)
                {
                    for (int strIndex = 0; strIndex < height; strIndex++)
                    {
                        for (int charIndex = 0; charIndex < width; charIndex++)
                        {
                            if (reliefs[reliefIndex][strIndex][charIndex] != '.')
                            {
                                string temp = resultRelief[strIndex];
                                temp = temp.Remove(charIndex, 1);
                                temp = temp.Insert(charIndex, reliefs[reliefIndex][strIndex][charIndex].ToString());
                                resultRelief[strIndex] = temp;
                            }
                        }
                    }
                }

                resultReliefs.Add(resultRelief);
            }

            // Output.
            for (int setResultIndex = 0; setResultIndex < setCount; setResultIndex++)
            {
                for (int strIndex = 0; strIndex < resultReliefs[setResultIndex].Count; strIndex++)
                {
                    Console.WriteLine(resultReliefs[setResultIndex][strIndex]);
                }
                Console.WriteLine();
            }
        }
    }
}
