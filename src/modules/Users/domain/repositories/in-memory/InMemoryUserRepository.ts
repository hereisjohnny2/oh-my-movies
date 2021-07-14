import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class InMemoryUserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  
  async createUser(data: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, data);
    this.users.push(user);
    return user;
  }

  async getById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async getFavoriteMovies(userId: string): Promise<string[]> {
    const user = this.users.find(user =>  user.id === userId);
    return user.favoriteMovies;
  }
  
  async getWatchLaterMovies(userId: string): Promise<string[]> {
    const user = this.users.find(user =>  user.id === userId);
    return user.watchLaterMovies;
  }

  async favoriteMovie(userId: string, moviesList: string[]): Promise<void> {
    const user = this.users.find(user =>  user.id === userId);
    Object.assign(user, {...user, favoriteMovies: moviesList});
  }

  async watchMovieLater(userId: string, moviesList: string[]): Promise<void> {
    const user = this.users.find(user =>  user.id === userId);
    Object.assign(user, {...user, watchLaterMovies: moviesList});
  }
}

export { InMemoryUserRepository }