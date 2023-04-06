using System;
using Microsoft.EntityFrameworkCore;

namespace MoviesBackend.Data
{
	// Pulls from the Movies model to create a context for the movies
	public class MovieDbContext : DbContext
	{
		public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

		public DbSet<Movies> Movies { get; set; }
	}
}

