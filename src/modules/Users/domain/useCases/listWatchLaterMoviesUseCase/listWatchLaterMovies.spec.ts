import { IMoviesRepository } from "../../../../Movies/domain/repositories/IMoviesRepository";
import { InMemoryMoviesRepository } from "../../../../Movies/domain/repositories/in-memory/InMemoryMoviesRepository";
import { InMemoryUserRepository } from "../../repositories/in-memory/InMemoryUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ListWatchLaterMoviesUseCase } from "./listWatchLaterMovies";

describe("Create User", () => {
  let userRepository: IUserRepository;
  let moviesRepository: IMoviesRepository;
  let listWatchLaterMoviesUseCase: ListWatchLaterMoviesUseCase;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    moviesRepository = new InMemoryMoviesRepository();
    listWatchLaterMoviesUseCase = new ListWatchLaterMoviesUseCase(userRepository, moviesRepository);
  });

  it("should be able to create a new user", async () => {
    await userRepository.createUser({
      id: "1",
      name: "test",
      avatar_img: "img/avatar",
      watchLaterMovies: ["1"],
    });

    const movies = await listWatchLaterMoviesUseCase.execute("1");  
    expect(movies).toHaveLength(1);  
  });
});