using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Activities;
using Domain;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {


        [HttpGet] //Endpoint
        public async Task<IActionResult> GetActivities()
        {
            //Fetches all activities from the Activity table
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] //activities/id
        public async Task<IActionResult> GetActivity(Guid id)
        {
            //Finds activity by ID
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity newActivity)
        {
            return HandleResult(await Mediator.Send(
                new CreateActivity.Command { Activity = newActivity }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(
                new UpdateActivity.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(
                new DeleteActivity.Command { Id = id }));
        }
    }
}