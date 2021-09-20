using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet] //Endpoint
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            //Fetches all activities from the Activity table
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")] //activities/id
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            //Finds activity by ID
            // Todo..add error handling later to capture wrong inputs
            return await _context.Activities.FindAsync(id);
        }

    }
}