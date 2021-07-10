import { Movie } from "../../domain/entities/Movie";
import { IMoviesRepository } from "../../domain/repositories/IMoviesRepository";
import { IMoviesDataSource } from "../datasources/IMoviesDataSource";

class TMDBMoviesRepository implements IMoviesRepository {
  constructor(
    private movieDataSource: IMoviesDataSource
  ) {}
  
  async searchByTitle(title: string, page: number): Promise<Movie[]> {
    const results = await this.movieDataSource.getByTitle(title, page);
    return results;
  }

  async searchById(id: string): Promise<Movie> {
    const result = await this.movieDataSource.getById(id);
    return result;
  }
}

export { TMDBMoviesRepository }