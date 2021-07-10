import { useContext } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Navbar } from "../../components/Navbar";
import { MovieSearchContext } from "../../contexts/movieSearchContext";

import "./styles.scss";

export function Home() {
  const { movieSearchList } = useContext(MovieSearchContext);

  return(
    <div id="home-page">
      <Navbar />
      <main className="main-container">
        {
          movieSearchList.length === 0 ? 
          <p>Use the SearchBox to find what to watch next!</p> : 
          movieSearchList.map(result => <MovieCard
            id={result.id}
            key={result.id}
            title={result.title}
            release_year={result.release_date.getFullYear().toString()}
            isFavorite={false}
            poster_path={result.poster_path}
          />)
        }
      </main>
    </div>
  );
}

