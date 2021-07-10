import { FormEvent, useContext } from "react";
import { MovieSearchContext } from "../../contexts/movieSearchContext";
import { searchMovieByTitleUseCase } from "../../modules/Movies/domain/useCases/searchMovieByTitle";

export function SearchBox() {
  const { titleInput, setTitleInput, setMovieSearchList } = useContext(MovieSearchContext);

  async function handleSearchByTitle(event: FormEvent) {
    event.preventDefault();
    try {
      const movies = await searchMovieByTitleUseCase.execute(titleInput);
      setMovieSearchList(movies);
    } catch (error) {
      alert(error);
    }
  }

  return(
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
  );
}