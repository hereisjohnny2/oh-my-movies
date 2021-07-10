import { Movie } from "../../domain/entities/Movie";

interface IMoviesDataSource {
  getByTitle(title: string, page: number): Promise<Movie[]>
  getById(id: string): Promise<Movie>
}

export type { IMoviesDataSource }