// Holds the structure of the movies as they are passed in from the json.
export type Movies = {
  movieId: number;
  category: string;
  title: string;
  year: number;
  director: string;
  rating: string;
  edited: string;
  lentTo: string;
  notes: string;
};
