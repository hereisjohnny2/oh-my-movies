import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

class SearchMovieByTitleUseCase {
  constructor(
    private moviesRepository: IMoviesRepository
  ){}

  async execute(title: string, page = 1): Promise<Movie[]> {
    if(title.trim() === '') {
      throw new Error("It is not possible to search for empty title value");
    }

    if (page < 1) {
      throw new Error(
        "It is not possible to get from a page number smaller then one"
      );
    }

    const movies = await this.moviesRepository.searchByTitle(title, page);
    return movies;
  }
}

export { SearchMovieByTitleUseCase }