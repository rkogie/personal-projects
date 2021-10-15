using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        /*Entity framework parses and searches for 
        and reads an 'Id' prop and assigns it as
        the primary key. 
        If ambiguous, then Entity will
        cause errors when building the ORM interface layer
        */
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }
}