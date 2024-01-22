using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace route256
{
    internal class Program
    {
        static void Main(string[] args)
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
    }
}
