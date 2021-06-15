using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Comp235MVCDemo.Models
{
    public class Movie
    {
        //Alternate version of variable declaration and calling accessors/mutators
        public int Id { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public string Description { get; set; }
        public bool IsEditable { get; set; }

        //Default Constructor - used to create new movies
        public Movie() { }

        //Constructor
        public Movie(int id, string title, string director)
        {
            Id = id;
            Title = title;
            Director = director;
        }

        //Constructor that holds description as a parameter
        public Movie(int id, string title, string director, string description)
        {
            Id = id;
            Title = title;
            Director = director;
            Description = description;
        }

    }
}