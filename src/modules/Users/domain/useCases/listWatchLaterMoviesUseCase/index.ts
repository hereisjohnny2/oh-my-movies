import { FirebaseUsersDataSource } from "../../../external/datasources/FirebaseUsersDataSource";
import { FirebaseUserRepository } from "../../../infra/repositories/FirebaseUserRepository";

import TMDBApi from "../../../../../services/TMDBApi";
import { TMDBMoviesDataSource } from "../../../../Movies/external/datasources/TMBDMovieDataSource";
import { TMDBMoviesRepository } from "../../../../Movies/infra/repositories/TMDBMoviesRepository";
import { ListWatchLaterMoviesUseCase } from "./listWatchLaterMovies";


const firebaseDataSource = new FirebaseUsersDataSource();
const firebaseUserRepository = new FirebaseUserRepository(firebaseDataSource);

const tmdbMoviesDataSource = new TMDBMoviesDataSource(TMDBApi);
const tmdbMoviesRepository = new TMDBMoviesRepository(tmdbMoviesDataSource);

const listWatchLaterMoviesUseCase = new ListWatchLaterMoviesUseCase(
  firebaseUserRepository,
  tmdbMoviesRepository
);

export { listWatchLaterMoviesUseCase }