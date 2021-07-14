import { Movie } from "../../../../Movies/domain/entities/Movie";
import { IMoviesRepository } from "../../../../Movies/domain/repositories/IMoviesRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListFavoriteMoviesUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute(userId: string): Promise<Movie[]> {
    const moviesId = await this.usersRepository.getFavoriteMovies(userId);
    const movies = Promise.all(
      moviesId.map(async id => await this.moviesRepository.searchById(id))
    );
    
    return movies;
  }
}

export { ListFavoriteMoviesUseCase }