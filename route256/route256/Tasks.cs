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

    }
}
