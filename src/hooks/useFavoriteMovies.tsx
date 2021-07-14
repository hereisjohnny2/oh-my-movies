import { useEffect, useState } from "react";
import { Movie } from "../modules/Movies/domain/entities/Movie";
import { listFavoriteMoviesUseCase } from "../modules/Users/domain/useCases/listFavoriteMoviesUseCase";
import { useAuth } from "./useAuth";

export function useFavoriteMovies() {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchMovieData(userId: string) {
      const movies = await listFavoriteMoviesUseCase.execute(userId);
      setFavoriteMovies(movies);
    }
    
    fetchMovieData(user.id);
  }, [user]);
   
  return { favoriteMovies }
}