import { MovieSearchResponseDTO } from "../../dto/MovieSearchResponseDTO";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

class SearchMovieByTitleUseCase {
  constructor(
    private moviesRepository: IMoviesRepository
  ){}

  async execute(title: string, page = 1): Promise<MovieSearchResponseDTO> {
    if(title.trim() === '') {
      throw new Error("It is not possible to search for empty title value");
    }

    if (page < 1) {
      throw new Error(
        "It is not possible to get from a page number smaller then one"
      );
    }

    const movieSearchResponse = await this.moviesRepository.searchByTitle(title, page);
    return movieSearchResponse;
  }
}

export { SearchMovieByTitleUseCase }