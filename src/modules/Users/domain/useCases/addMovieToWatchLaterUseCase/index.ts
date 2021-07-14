import { FirebaseUsersDataSource } from "../../../external/datasources/FirebaseUsersDataSource";
import { FirebaseUserRepository } from "../../../infra/repositories/FirebaseUserRepository";
import { AddMovieToWatchLaterListUseCase } from "./AddMovieToWatchLaterListUseCase";

const firebaseDataSource = new FirebaseUsersDataSource();
const firebaseUserRepository = new FirebaseUserRepository(firebaseDataSource);
const addMovieToWatchLaterListUseCase = new AddMovieToWatchLaterListUseCase(firebaseUserRepository);
export { addMovieToWatchLaterListUseCase }