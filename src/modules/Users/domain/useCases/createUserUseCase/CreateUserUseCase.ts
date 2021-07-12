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
   }: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.createUser({
      id,
      name,
      avatar_img,
    });

    return user;
  }
}

export { CreateUserUseCase }