import "./styles.scss";
import { MovieCard } from "../MovieCard";
import { LoadingContainer } from "../loadingContainer";
import { useWatchLaterMovies } from "../../hooks/useWatchLaterMovies";

export function WatchLaterMoviesList() {
  const { watchLaterMovies } = useWatchLaterMovies();  

  return (
    <div className="movies-list">
      <h3>Watch Later Movies</h3>
      <div className="movies">
        {
          watchLaterMovies ? 
          watchLaterMovies?.map(movie => {
            return (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                release_year={movie.release_date.getFullYear().toString()}
                title={movie.title}
                poster_path={movie.poster_path}
                watchLater
                showFavorite={false}
              />
            );
          }) : 
          <LoadingContainer />
        }
      </div>
    </div>
  );
}