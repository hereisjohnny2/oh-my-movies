import { FirebaseUsersDataSource } from "../../../external/datasources/FirebaseUsersDataSource";
import { FirebaseUserRepository } from "../../../infra/repositories/FirebaseUserRepository";
import { FavoriteMovieUseCase } from "./favoriteMovieUseCase";

const firebaseDataSource = new FirebaseUsersDataSource();
const firebaseUserRepository = new FirebaseUserRepository(firebaseDataSource);
const favoriteMovieUseCase = new FavoriteMovieUseCase(firebaseUserRepository);

export { favoriteMovieUseCase }