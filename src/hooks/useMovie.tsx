import { useEffect } from "react";
import { useState } from "react";
import { Movie } from "../modules/Movies/domain/entities/Movie";
import { searchMovieByIdUseCase } from "../modules/Movies/domain/useCases/searchMovieById";

type UseMovieType = {
  movieDetail: Movie | undefined;
}

export function useMovie(movieId: string): UseMovieType {
  const [movieDetail, setMovieDetail] = useState<Movie>();

  useEffect(() => {
    async function fetchMovieData() {
      const movie = await searchMovieByIdUseCase.execute(movieId);
      setMovieDetail(movie);
    }
    try {
      fetchMovieData();
    } catch (error) {
      alert(error);
    }
  }, [movieDetail, movieId, setMovieDetail]);

  return { movieDetail }
}