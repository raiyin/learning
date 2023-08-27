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
            var inParams = Console.ReadLine().Split(new char[] { ' ' });
            int fCount = int.Parse(inParams[0]);
            int cCount = int.Parse(inParams[1]);

            var friends = Console.ReadLine().Split(new char[] { ' ' }).Select(item => int.Parse(item)).ToList();
            var cards = new List<int>();
            cards.AddRange(Enumerable.Range(1, cCount));

            int[] indexes = new int[fCount];

            while (friends.Any(item => item != -1))
            {
                int smallest = friends.Where(item => item != -1).Min();
                int index = friends.IndexOf(smallest);
                friends[index] = -1;

                if (cards.Any(item => item >= smallest + 1))
                {
                    var cSmallest = cards.Where(item => item >= (smallest + 1)).Min();
                    cards.Remove(cSmallest);
                    indexes[index] = cSmallest;
                }
                else
                {
                    Console.WriteLine("-1");
                    return;
                }
            }

            Console.WriteLine(string.Join(" ", indexes));
        }
    }
}
