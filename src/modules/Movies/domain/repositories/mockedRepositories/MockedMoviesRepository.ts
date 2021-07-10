import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../IMoviesRepository";

class MockedMoviesRepository  implements IMoviesRepository {
  private movies: Movie[];
  
  constructor() {
    this.movies = []
  }
  
  searchByTitle(title: string, page: number): Promise<Movie[]> {
    throw new Error("Method not implemented.");
  }
  searchById(id: string): Promise<Movie> {
    throw new Error("Method not implemented.");
  }
}

export { MockedMoviesRepository }