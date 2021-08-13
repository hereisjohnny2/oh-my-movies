import TMDBApi from "../../../../../services/TMDBApi";
import { TMDBMoviesDataSource } from "../../../external/datasources/TMBDMovieDataSource";
import { TMDBMoviesRepository } from "../../../infra/repositories/TMDBMoviesRepository";
import { SearchMovieByTitleUseCase } from "./SearchMovieByTitleUseCase";

const moviesDataSource = new TMDBMoviesDataSource(TMDBApi);
const moviesRepository = new TMDBMoviesRepository(moviesDataSource);
const searchMovieByTitleUseCase = new SearchMovieByTitleUseCase(moviesRepository);

export { searchMovieByTitleUseCase }