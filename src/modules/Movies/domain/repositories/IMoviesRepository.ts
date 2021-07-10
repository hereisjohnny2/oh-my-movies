import { Movie } from "../entities/Movie";

interface IMoviesRepository {
  searchByTitle(title: string, page: number): Promise<Movie[]>;
  searchById(id: string): Promise<Movie>;
}

export type { IMoviesRepository }