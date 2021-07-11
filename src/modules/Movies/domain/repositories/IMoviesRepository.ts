import { MovieSearchResponseDTO } from "../dto/MovieSearchResponseDTO";
import { Movie } from "../entities/Movie";

interface IMoviesRepository {
  searchByTitle(title: string, page: number): Promise<MovieSearchResponseDTO>;
  searchById(id: string): Promise<Movie>;
}

export type { IMoviesRepository }