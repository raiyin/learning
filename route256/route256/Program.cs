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
