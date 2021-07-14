import "./styles.scss";
import { MovieCard } from "../MovieCard";
import { useFavoriteMovies } from "../../hooks/useFavoriteMovies";
import { LoadingContainer } from "../loadingContainer";

type MoviesListPropsType = {
  title: string,
  movies: string[],
}

export function MoviesList({ title, movies }: MoviesListPropsType) {
  const { favoriteMovies } = useFavoriteMovies();  


  return (
    <div className="movies-list">
      <h3>{title}</h3>
      <div className="movies">
        {
          favoriteMovies ? 
          favoriteMovies?.map(movie => {
            return (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                release_year={movie.release_date.getFullYear().toString()}
                title={movie.title}
                poster_path={movie.poster_path}
                isFavorite
              />
            );
          }) : 
          <LoadingContainer />
        }
      </div>
    </div>
  );
}