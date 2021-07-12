import { ICreateUserDTO } from "../../domain/dtos/ICreateUserDTO";
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUsersDataSource } from "../datasources/IUsersDataSources";

class FirebaseUserRepository implements IUserRepository {
  constructor(
    private usersDataSource: IUsersDataSource
  ) {}

  async createUser({
    id,
    name,
    avatar_img
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersDataSource.create({
      id,
      name,
      avatar_img,
    });
    return user;
  }

  async getById(id: string): Promise<User> {
    const user = await this.usersDataSource.getUser(id);
    return user;
  }

  async getFavoriteMovies(userId: string): Promise<string[]> {
    const movies = await this.usersDataSource.getFavoriteMovies(userId);
    return movies;
  }

  async getWatchLaterMovies(userId: string): Promise<string[]> {
    const movies = await this.usersDataSource.getWatchLaterMovies(userId);
    return movies;
  }

  async favoriteMovie(userId: string, moviesList: string[]): Promise<void>{
    await this.usersDataSource.setFavoriteMovie(userId, moviesList);
  }

  async watchMovieLater(userId: string, moviesList: string[]): Promise<void> {
    await this.usersDataSource.setWatchLaterMovie(userId, moviesList);
  }
}

export { FirebaseUserRepository }