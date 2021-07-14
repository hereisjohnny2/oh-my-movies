import { useEffect, useState } from "react";
import { Movie } from "../modules/Movies/domain/entities/Movie";
import { listWatchLaterMoviesUseCase } from "../modules/Users/domain/useCases/listWatchLaterMoviesUseCase";
import { useAuth } from "./useAuth";

export function useWatchLaterMovies() {
  const [watchLaterMovies, setWatchLaterMovies] = useState<Movie[]>();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchMovieData(userId: string) {
      const movies = await listWatchLaterMoviesUseCase.execute(userId);
      setWatchLaterMovies(movies);
    }
    
    fetchMovieData(user.id);
  }, [user]); 
   
  return { watchLaterMovies }
}