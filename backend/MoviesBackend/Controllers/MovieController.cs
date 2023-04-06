using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesBackend.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesBackend.Controllers
{
    // Creates the api to work with the frontend
    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movies> Get()
        {
            // Gathers the movies from the context and sorts by those that have been edited and sorts them alphabetically
            return context.Movies
                .Where(x => x.Edited.ToLower() == "yes")
                .OrderBy(x => x.Title)
                .ToArray();
        }
    }
}

