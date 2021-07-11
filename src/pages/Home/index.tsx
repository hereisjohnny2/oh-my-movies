import { useContext } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Navbar } from "../../components/Navbar";
import { MovieSearchContext } from "../../contexts/movieSearchContext";
import { searchMovieByTitleUseCase } from "../../modules/Movies/domain/useCases/searchMovieByTitle";
import { LoadingContainer } from "../../components/loadingContainer";
import { EmptyListContainer } from "../../components/emptyListContainer";

import "./styles.scss";

export function Home() {
  const { 
    movieSearchList, 
    totalPages, 
    setPage,
    titleInput,
    setMovieSearchList,
    isLoading,
  } = useContext(MovieSearchContext);

  async function handleSetPageNumber(page: number) {
    setPage(page);  
    const { moviesList } = await searchMovieByTitleUseCase.execute(titleInput, page);
    setMovieSearchList(moviesList);  
    window.scrollTo(0,0);
  }

  const pageNavigationLinkList = [];
  for(let page=1; page <= totalPages; page++) {
    pageNavigationLinkList.push(
      <button key={page} onClick={() => handleSetPageNumber(page)}>
        {page}
      </button>
    );
  }

  return(
    <div id="home-page">
      <Navbar />
      {
        isLoading ? 
        <LoadingContainer /> : 
        <main className="main-container">
          {
            movieSearchList.length === 0 ? 
            <EmptyListContainer /> : 
            <>{
              movieSearchList.map(result => <MovieCard
                  id={result.id}
                  key={result.id}
                  title={result.title}
                  release_year={result.release_date.getFullYear().toString()}
                  isFavorite={false}
                  poster_path={result.poster_path}
                />)
              }
              <div className="page-navigation">
                {pageNavigationLinkList}
              </div>
            </>
          }
        </main>
      }
    </div>
  );
}

