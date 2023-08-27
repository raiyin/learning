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
    }
}
