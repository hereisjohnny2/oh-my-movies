import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { MovieSearchContext } from "../contexts/movieSearchContext";
import { Movie } from "../modules/Movies/domain/entities/Movie";
import { searchMovieByIdUseCase } from "../modules/Movies/domain/useCases/searchMovieById";

type UseMovieType = {
  movieDetail: Movie | undefined;
}

export function useMovie(movieId: string): UseMovieType {
  const [movieDetail, setMovieDetail] = useState<Movie>();
  const { setIsLoading } = useContext(MovieSearchContext);

  useEffect(() => {
    async function fetchMovieData() {
      const movie = await searchMovieByIdUseCase.execute(movieId);
      setMovieDetail(movie);
    }
    
    try {
      fetchMovieData();
      return (() => {
        axios.CancelToken.source().cancel();
      });  
    } catch (error) {
      alert(error);
    }  
  }, [movieDetail, movieId, setMovieDetail, setIsLoading]);

  return { movieDetail }
}