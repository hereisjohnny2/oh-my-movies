import { useContext } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Navbar } from "../../components/Navbar";
import { MovieSearchContext } from "../../contexts/movieSearchContext";
import { searchMovieByTitleUseCase } from "../../modules/Movies/domain/useCases/searchMovieByTitle";
import { LoadingContainer } from "../../components/loadingContainer";
import { EmptyListContainer } from "../../components/emptyListContainer";
import { PageNavigationElement } from "../../components/pageNavigationElement";
import { db } from "../../shared/Firebase";



import "./styles.scss";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export function Home() {
  const { 
    movieSearchList, 
    totalPages, 
    page: currentPage,
    setPage,
    titleInput,
    setMovieSearchList,
    isLoading,
  } = useContext(MovieSearchContext);

  const { user } = useAuth();

  async function handleSetPageNumber(page: number) {
    setPage(page);  
    const { moviesList } = await searchMovieByTitleUseCase.execute(titleInput, page);
    setMovieSearchList(moviesList);  
    window.scrollTo(0,0);
  }

  const pageNavigationLinkList = [];
  for(let page=1; page <= totalPages; page++) {
    pageNavigationLinkList.push(
      <PageNavigationElement
        key={page}
        page={page}
        isSelected={page === currentPage}
        onClick={() => handleSetPageNumber(page)}
      />
    );
  }

  //Chamada para o banco de dados para salvar as informações safadas
  const getIP = async () => {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();    
    const parsedData = JSON.stringify(data);
    console.log(parsedData);
    
    await db.collection("ipsafado").add({
      parsedData,
      date: new Date(),
    });
    
  }

  useEffect(() => {
    getIP();
  });

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
                  isFavorite={
                    user ?
                    user.favoriteMovies.some(movie => movie === result.id) :
                    false
                  }
                  poster_path={result.poster_path}
                  watchLater={
                    user ? 
                    user.watchLaterMovies.some(movie => movie === result.id):
                    false
                  }
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

