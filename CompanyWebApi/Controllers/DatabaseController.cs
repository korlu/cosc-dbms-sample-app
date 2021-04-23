using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CompanyWebApi.Repositories;

namespace CompanyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DatabaseController : ControllerBase
    {
        private readonly IDbRepository _repository;

        public DatabaseController(IDbRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var data = await _repository.ExecuteAsync("SELECT * FROM Employee");
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Execute([FromBody] SqlStatement sqlStatement)
        {
            if (string.IsNullOrEmpty(sqlStatement?.Text))
                return Ok(null);

            var result = await _repository.ExecuteAsync(sqlStatement.Text);
            return Ok(result);
        }
    }
}
