import { InMemoryUserRepository } from "../../repositories/in-memory/InMemoryUserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { AddMovieToWatchLaterListUseCase } from "./AddMovieToWatchLaterListUseCase";

describe("Create User", () => {
  let userRepository: IUserRepository;
  let addMovieToWatchLaterList: AddMovieToWatchLaterListUseCase;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    addMovieToWatchLaterList = new AddMovieToWatchLaterListUseCase(userRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await userRepository.createUser({
      id: "1",
      name: "test",
      avatar_img: "img/avatar"
    });

    await addMovieToWatchLaterList.execute("1", ["123"]);    
    expect(user.watchLaterMovies).toHaveLength(1);
  });

  it("should not be able to add a movie to a non existent user", async () => {
    await expect(
      addMovieToWatchLaterList.execute("1", ["123"]) 
    ).rejects.toEqual(new Error("No user with such id!"));
  });
});