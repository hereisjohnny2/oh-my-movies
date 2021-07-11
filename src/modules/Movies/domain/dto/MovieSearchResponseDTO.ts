import { Movie } from "../entities/Movie";

interface MovieSearchResponseDTO {
  moviesList: Movie[],
  total_pages?: number,
}

export type { MovieSearchResponseDTO }