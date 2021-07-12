import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute({ 
    id,
    name,
    avatar_img,
    favoriteMovies,
    watchLaterMovies
   }: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.createUser({
      id,
      name,
      avatar_img,
      favoriteMovies,
      watchLaterMovies,
    });

    return user;
  }
}

export { CreateUserUseCase }