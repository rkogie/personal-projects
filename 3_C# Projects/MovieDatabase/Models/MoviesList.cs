using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Comp235MVCDemo.Models
{
    public class MoviesList
    {
        //Alternate version of variable declaration and calling accessors/mutators
        public List<Movie> Items { get; set; }
        public int EditIndex { get; set; }

        //Default Constructor
        public MoviesList() { }

    }
}