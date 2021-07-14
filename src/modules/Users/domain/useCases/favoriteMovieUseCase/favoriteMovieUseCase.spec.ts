import { InMemoryUserRepository } from "../../repositories/in-memory/InMemoryUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { FavoriteMovieUseCase } from "./favoriteMovieUseCase";

describe("Create User", () => {
  let userRepository: IUserRepository;
  let favoriteMovieUseCase: FavoriteMovieUseCase;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    favoriteMovieUseCase = new FavoriteMovieUseCase(userRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await userRepository.createUser({
      id: "1",
      name: "test",
      avatar_img: "img/avatar"
    });

    await favoriteMovieUseCase.execute("1", ["123"]);    
    expect(user.favoriteMovies).toHaveLength(1);
  });

  it("should not be able to add a movie to a non existent user", async () => {
    await expect(
      favoriteMovieUseCase.execute("1", ["123"]) 
    ).rejects.toEqual(new Error("No user with such id!"));
  });
});