import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
  createUser(data: ICreateUserDTO): Promise<User>
  getById(id: string): Promise<User>

  getFavoriteMovies(userId: string): Promise<string[]>
  getWatchLaterMovies(userId: string):Promise<string[]>
  
  favoriteMovie(userId: string, moviesList: string[]): Promise<void>
  watchMovieLater(userId: string, moviesList: string[]): Promise<void> 
}