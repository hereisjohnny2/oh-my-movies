export type TMDBMovieResult = {
  title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  backdrop_path: string | undefined;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}