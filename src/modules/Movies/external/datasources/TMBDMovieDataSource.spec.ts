import TMDBApi from "../../../../shared/TMDBApi";
import { TMDBMoviesDataSource } from "./TMBDMovieDataSource";

describe("TMDB API", () => {
  const tmdbMoviesDataSource = new TMDBMoviesDataSource(TMDBApi);

  it("should be able to fetch movie data by it's ID", async () => {
    const movie = await tmdbMoviesDataSource.getById("550");
    expect(movie).toHaveProperty("title");
  });

  it("should not be able to fetch data from a non-existent movie", async() => {
    await expect(
      tmdbMoviesDataSource.getById("0")
    ).rejects.toThrow()
  });

  it(
    "should be able to search for a movie by title and return a movie list and a total of pages", 
    async () => {
      // eslint-disable-next-line testing-library/no-await-sync-query
      const { moviesList, total_pages } = await tmdbMoviesDataSource.getByTitle("fight club", 1);
      expect(moviesList).toHaveLength(20);
      expect(total_pages).toBe(2);
    }
  );
});