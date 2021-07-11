import { MovieSearchResponseDTO } from "../../domain/dto/MovieSearchResponseDTO";
import { Movie } from "../../domain/entities/Movie";

interface IMoviesDataSource {
  getByTitle(title: string, page: number): Promise<MovieSearchResponseDTO>
  getById(id: string): Promise<Movie>
}

export type { IMoviesDataSource }