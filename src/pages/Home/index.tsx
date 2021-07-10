import { FormEvent, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Movie } from "../../modules/Movies/domain/entities/Movie";
import { searchMovieByTitleUseCase } from "../../modules/Movies/domain/useCases/searchMovieByTitle";

export function Home() {
  const [movieSearchList, setMovieSearchList] = useState<Movie[]>([]);
  const [titleInput, setTitleInput] = useState("");

  async function handleSearchByTitle(event: FormEvent) {
    event.preventDefault();

    const movies = await searchMovieByTitleUseCase.execute(titleInput);
    
    setMovieSearchList(movies);
  }

  return(
    <>
      <nav>
        <img src="" alt="logo" />
        <form onSubmit={handleSearchByTitle}>
          <input 
            type="text" 
            placeholder="What do you want to watch?"
            value={titleInput}
            onChange={event => setTitleInput(event.target.value)}
          />
          <button type="submit">
            <img src="" alt="pesquisar" />
          </button>
        </form>
        <button>
          <img src="" alt="avatar-icon" />
        </button>
      </nav>
      <main className="main-container">
        {
          movieSearchList.length === 0 ? 
          <p>Use the SearchBox to find what to watch next!</p> : 
          movieSearchList.map(result => <MovieCard
            title={result.title}
            release_year={result.release_date.getFullYear().toString()}
            isFavorite={false}
            poster_path={result.poster_path}
          />)
        }
      </main>
    </>
  );
}

