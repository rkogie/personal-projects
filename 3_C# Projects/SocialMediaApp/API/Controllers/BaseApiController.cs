using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

/*High Level Interface Controller which will be injected by lower-level modules
upon any sub-module instantiation*/
namespace API.Controllers
{
    //Every sub-class will inherit these props within their functionality - ID in SOLID
    [ApiController]
    [Route("api/[controller]")] //api/activites/{whateverendpoint}
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices
        .GetService<IMediator>();
    }
}