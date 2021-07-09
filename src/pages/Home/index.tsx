import { FormEvent, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { getMovieByTitle } from "../../services/TMDBServices";

interface movieSearchType {
  title: string;
  poster_path?: string;
  release_year: string;
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

export function Home() {
  const [movieSearchList, setMovieSearchList] = useState<movieSearchType[]>([]);
  const [titleInput, setTitleInput] = useState("");

  async function handleSearchByTitle(event: FormEvent) {
    event.preventDefault();

    if (titleInput.trim() === '') {
      throw new Error("It's not possible to search for an empty string!");
    }

    const response = await getMovieByTitle(titleInput);

    if (response.status === 404) {
      throw new Error("It's not to find the query!");
    }
    const results: Array<movieSearchType> = response.data.results;
    setMovieSearchList(results);
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
            release_year={result.release_date}
            isFavorite={false}
            poster_path={result.poster_path}
          />)
        }
      </main>
    </>
  );
}

