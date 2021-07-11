import { Navbar } from "../../components/Navbar";
import { LoadingContainer } from "../../components/loadingContainer";
import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovie";

import "./styles.scss";
import { useContext } from "react";
import { MovieSearchContext } from "../../contexts/movieSearchContext";

type MoviePageParams = {
  id: string;
}

export function MoviePage() {
  const params = useParams<MoviePageParams>();
  const { id } = params;

  const { isLoading } = useContext(MovieSearchContext);
  const { movieDetail } = useMovie(id);
  
  return(
    <div id="movie-page">
      <Navbar />
      {
        isLoading ?
        <LoadingContainer /> :
        <main className="main-container">
          <img src={movieDetail?.poster_path} alt="movie-poster" />
          <div className="info">
            <strong>{movieDetail?.title}</strong>
            <span>{movieDetail?.release_date.getFullYear().toString()}</span>
            <p>{movieDetail?.overview}</p>
            <span id="movie-rate">{movieDetail?.vote_average}/10</span>
          </div>
        </main>
      }
    </div>  
  );
}