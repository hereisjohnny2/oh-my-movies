import { IUserRepository } from "../../repositories/IUserRepository";

class FavoriteMovieUseCase {
  constructor(
    private userRepository: IUserRepository,
  ){}

  async execute(userId: string, movies: string[]): Promise<void> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error("No user with such id!");
    }

    await this.userRepository.favoriteMovie(userId, movies);
  }
}

export { FavoriteMovieUseCase }