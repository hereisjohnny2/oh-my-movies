import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { InMemoryMoviesRepository } from "../../repositories/in-memory/InMemoryMoviesRepository";
import { SearchMovieByTitleUseCase } from "./SearchMovieByTitleUseCase";

describe("Search Movie By Id", () => {
  let movieRepository: IMoviesRepository;
  let searchMovieByTitleUseCase: SearchMovieByTitleUseCase;

  beforeEach(() => {
    movieRepository = new InMemoryMoviesRepository();
    searchMovieByTitleUseCase = new SearchMovieByTitleUseCase(movieRepository)
  });

  it("Should be able to return a movie", async () => {
    const movies = await searchMovieByTitleUseCase.execute("test1");
    expect(movies).toHaveProperty("moviesList");
    expect(movies).toHaveProperty("total_pages");
    expect(movies.moviesList).toHaveLength(1);
  });

  it("should not be able to search for an empty string", async () => {
    await expect(
      searchMovieByTitleUseCase.execute(" ")
    ).rejects.toEqual(
      new Error("It is not possible to search for empty title value")
    );
  });

  it("should not be able to search for page lower than 1", async () => {
    await expect(
      searchMovieByTitleUseCase.execute("test1", 0)
    ).rejects.toEqual(
      new Error(
        "It is not possible to get from a page number smaller then one"
      )
    );
  });
});