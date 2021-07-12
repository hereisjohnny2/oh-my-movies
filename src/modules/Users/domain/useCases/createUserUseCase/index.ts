import { FirebaseUsersDataSource } from "../../../external/datasources/FirebaseUsersDataSource";
import { FirebaseUserRepository } from "../../../infra/repositories/FirebaseUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

const firebaseDataSource = new FirebaseUsersDataSource();
const firebaseUserRepository = new FirebaseUserRepository(firebaseDataSource);
const createUserUseCase = new CreateUserUseCase(firebaseUserRepository);

export { createUserUseCase }