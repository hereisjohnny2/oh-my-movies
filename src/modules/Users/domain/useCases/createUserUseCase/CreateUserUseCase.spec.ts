import { InMemoryUserRepository } from "../../repositories/in-memory/InMemoryUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe("Create User", () => {
  let userRepository: IUserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      id: "1",
      name: "test",
      avatar_img: "img/avatar"
    });
    expect(user).toHaveProperty("id");
  });
});