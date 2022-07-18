using Core.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business
{
    public static class BusinessRules
    {
        /// <summary>
        /// checks the business rules one by one and returns them if they are correct. 
        /// returns false even if a rule is not true
        /// </summary>
        
        public static IResult Run(params IResult[] logics)
        {
            foreach (var Rules in logics)
            {
                if (!Rules.Success)
                {
                    return Rules;
                }
            }
            return null;   
        }
    }
}
