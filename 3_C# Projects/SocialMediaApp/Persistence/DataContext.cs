using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        /*
        This will represent the table in our development database.
        Table name = property name
        Columns = Derived from the props of Activity Class
        */
        public DbSet<Activity> Activities { get; set; }
    }
}