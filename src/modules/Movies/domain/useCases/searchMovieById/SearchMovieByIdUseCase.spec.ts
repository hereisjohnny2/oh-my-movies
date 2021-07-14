import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { InMemoryMoviesRepository } from "../../repositories/in-memory/InMemoryMoviesRepository";
import { SearchMovieByIdUseCase } from "./SearchMovieByIdUseCase";

describe("Search Movie By Id", () => {
  let movieRepository: IMoviesRepository;
  let searchMovieByIdUseCase: SearchMovieByIdUseCase;
  beforeEach(() => {
    movieRepository = new InMemoryMoviesRepository();
    searchMovieByIdUseCase = new SearchMovieByIdUseCase(movieRepository);
  });

  it("Should be able to return a movie", async () => {
    const movie = await searchMovieByIdUseCase.execute("1");
    expect(movie.title).toBe("test1");
  });

  it("Should not be able to return a non-existent movie", async () => {
    await expect(searchMovieByIdUseCase.execute("3")).rejects.toEqual(
      new Error("There is no movie with such ID.")
    );
  })
});