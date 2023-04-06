using System;
using System.ComponentModel.DataAnnotations;

namespace MoviesBackend.Data
{
	public class Movies
	{
        // Manually set up model to link the app with the database. 
        [Key]
        public int MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public int Year { get; set; }
        public string? Director { get; set; }
        public int? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
	}
}

