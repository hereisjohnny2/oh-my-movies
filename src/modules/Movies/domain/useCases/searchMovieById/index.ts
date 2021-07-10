import TMDBApi from "../../../../../shared/TMDBApi";
import { TMDBMoviesDataSource } from "../../../external/datasources/TMBDMovieDataSource";
import { TMDBMoviesRepository } from "../../../infra/repositories/TMDBMoviesRepository";
import { SearchMovieByIdUseCase } from "./SearchMovieByIdUseCase";

const moviesDataSource = new TMDBMoviesDataSource(TMDBApi);
const moviesRepository = new TMDBMoviesRepository(moviesDataSource);
const searchMovieByIdUseCase = new SearchMovieByIdUseCase(moviesRepository);

export { searchMovieByIdUseCase }