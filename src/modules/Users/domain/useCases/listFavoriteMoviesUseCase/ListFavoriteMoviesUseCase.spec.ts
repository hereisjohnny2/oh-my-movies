import { IMoviesRepository } from "../../../../Movies/domain/repositories/IMoviesRepository";
import { InMemoryMoviesRepository } from "../../../../Movies/domain/repositories/in-memory/InMemoryMoviesRepository";
import { InMemoryUserRepository } from "../../repositories/in-memory/InMemoryUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ListFavoriteMoviesUseCase } from "./ListFavoriteMoviesUseCase";

describe("Create User", () => {
  let userRepository: IUserRepository;
  let moviesRepository: IMoviesRepository;
  let listFavoriteMoviesUseCase: ListFavoriteMoviesUseCase;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    moviesRepository = new InMemoryMoviesRepository();
    listFavoriteMoviesUseCase = new ListFavoriteMoviesUseCase(userRepository, moviesRepository);
  });

  it("should be able to create a new user", async () => {
    await userRepository.createUser({
      id: "1",
      name: "test",
      avatar_img: "img/avatar",
      favoriteMovies: ["1"],
    });

    const movies = await listFavoriteMoviesUseCase.execute("1");  
    expect(movies).toHaveLength(1);  
  });
});