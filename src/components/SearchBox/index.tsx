import { FormEvent, useContext } from "react";
import { MovieSearchContext } from "../../contexts/movieSearchContext";
import { searchMovieByTitleUseCase } from "../../modules/Movies/domain/useCases/searchMovieByTitle";
import SearchImg from "../../assets/search.svg";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export function SearchBox() {
  const { 
    titleInput, 
    setTitleInput, 
    setMovieSearchList, 
    setTotalPages,
  } = useContext(MovieSearchContext);
  const history = useHistory();

  async function handleSearchByTitle(event: FormEvent) {
    event.preventDefault();
    try {
      const { moviesList, total_pages} = await searchMovieByTitleUseCase.execute(titleInput);
      setMovieSearchList(moviesList);

      if (total_pages) {
        setTotalPages(total_pages);
      }

      history.push("/");
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
        <img src={SearchImg} alt="pesquisar" />
      </button>
    </form>
  );
}