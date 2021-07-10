import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

class SearchMovieByIdUseCase {
  constructor(
    private moviesRepository: IMoviesRepository
  ){}

  async execute(id: string): Promise<Movie> {
    const movie = await this.moviesRepository.searchById(id);

    if (!movie) {
      throw new Error("There is no movie with such ID.");
    }

    return movie;
  }
}

export { SearchMovieByIdUseCase }