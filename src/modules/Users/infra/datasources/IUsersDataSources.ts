import { ICreateUserDTO } from "../../domain/dtos/ICreateUserDTO";
import { User } from "../../domain/entities/User";

export interface IUsersDataSource {
  create(data: ICreateUserDTO): Promise<User>
  getUser(userId: string): Promise<User>
  getFavoriteMovies(userId: string): Promise<string[]>
  getWatchLaterMovies(userId: string): Promise<string[]>
  setFavoriteMovie(userId: string, movies: string[]): Promise<void>
  setWatchLaterMovie(userId: string, movies: string[]): Promise<void>
}