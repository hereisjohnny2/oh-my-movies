import { Navbar } from "../../components/Navbar";
import { LoadingContainer } from "../../components/loadingContainer";
import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovie";

import "./styles.scss";

type MoviePageParams = {
  id: string;
}

export function MoviePage() {
  const params = useParams<MoviePageParams>();
  const { id } = params;

  const { movieDetail } = useMovie(id);
  
  return(
    <div id="movie-page">
      <Navbar />
      {
        movieDetail ? 
        <main className="main-container">
          <img src={movieDetail?.poster_path} alt="movie-poster" />
          <div className="info">
            <strong>{movieDetail?.title}</strong>
            <span>{movieDetail?.release_date.getFullYear().toString()}</span>
            <p>{movieDetail?.overview}</p>
            <span id="movie-rate">{movieDetail?.vote_average}/10</span>
          </div>
        </main> :
        <LoadingContainer />
      }
    </div>  
  );
}