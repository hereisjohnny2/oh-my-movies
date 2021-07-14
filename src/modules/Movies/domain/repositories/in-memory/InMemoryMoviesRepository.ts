import { MovieSearchResponseDTO } from "../../dto/MovieSearchResponseDTO";
import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../IMoviesRepository";

class InMemoryMoviesRepository implements IMoviesRepository {
  private movies: Movie[] = [
    {
      id: "1", 
      title: "test1", 
      overview: "test overview 1", 
      poster_path: "poster/test",
      release_date: new Date("2020-02-02"),
      vote_average: 5,
    }
  ]
  
  async searchByTitle(title: string, page: number): Promise<MovieSearchResponseDTO> {
    const movies = this.movies.filter(movie => movie.title === title);
    return { moviesList: movies, total_pages: 1 }
  }
  
  async searchById(id: string): Promise<Movie> {
    return this.movies.find(movie => movie.id === id); 
  }
}

export { InMemoryMoviesRepository }