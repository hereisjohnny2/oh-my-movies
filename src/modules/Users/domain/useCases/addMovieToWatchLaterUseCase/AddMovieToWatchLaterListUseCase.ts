import { IUserRepository } from "../../repositories/IUserRepository";

class AddMovieToWatchLaterListUseCase {
  constructor(
    private userRepository: IUserRepository,
  ){}

  async execute(userId: string, movies: string[]): Promise<void> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error("No user with such id!");
    }

    await this.userRepository.watchMovieLater(userId, movies);
  }
}

export { AddMovieToWatchLaterListUseCase }