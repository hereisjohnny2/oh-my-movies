import "./styles.scss";
import { MovieCard } from "../MovieCard";

type MoviesListPropsType = {
  title: string,
  movies: string[],
}

export function MoviesList({ title, movies }: MoviesListPropsType) {
  return (
    <div className="movies-list">
      <h3>{title}</h3>
      <div className="movies">
        <MovieCard 
          id="1"
          isFavorite
          release_year="1997"
          title="Nemo"
          key={1}
          poster_path=""
        />
        <MovieCard 
          id="1"
          isFavorite
          release_year="1997"
          title="Nemo"
          key={1}
          poster_path=""
        />
        <MovieCard 
          id="1"
          isFavorite
          release_year="1997"
          title="Nemo"
          key={1}
          poster_path=""
        />
        {/* {
          movies.map(movie => {
            return (
              <p>{movie}</p>
            );
          })
        } */}
      </div>
    </div>
  );
}