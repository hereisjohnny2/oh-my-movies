import "./styles.scss";

import EmptyStarImg from "../../assets/empty-star.svg";
import FillStarImg from "../../assets/fill-star.svg";
import EmptyAddImg from "../../assets/empty-add.svg";
import FillAddImg from "../../assets/fill-add.svg";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { favoriteMovieUseCase } from "../../modules/Users/domain/useCases/favoriteMovieUseCase";
import { addMovieToWatchLaterListUseCase } from "../../modules/Users/domain/useCases/addMovieToWatchLaterUseCase";
import { useState } from "react";

interface MovieCardProps {
  id: string,
  title: string;
  poster_path?: string;
  release_year: string;
  isFavorite?: boolean;
  watchLater?: boolean;
  showFavorite?: boolean;
  showWatchLater?: boolean;
}

export function MovieCard({
  id,
  title,
  release_year,
  isFavorite,
  poster_path,
  watchLater,
  showFavorite = true,
  showWatchLater = true  
}: MovieCardProps) {
  const history = useHistory();
  const { user, setFavoriteList, setWatchLaterList } = useAuth();
  const [favorite, setFavorite] = useState(isFavorite);
  const [addToWatch, setAddToWatch] = useState(watchLater);

  async function handleShowMovieInfoPage() {
    history.push(`/movie/${id}`);
  }

  async function handleFavoriteMovie() {
    if (user) {
      let newFavoriteMovies: string[];
      if (favorite) {
        newFavoriteMovies = user.favoriteMovies.filter(movie => movie !== id);
        setFavorite(false);
      } else {
        newFavoriteMovies = user.favoriteMovies;
        newFavoriteMovies.push(id);
        setFavorite(true);
      }
      await favoriteMovieUseCase.execute(user.id, newFavoriteMovies);
      setFavoriteList(newFavoriteMovies);
    } else {
      alert("You should login first!");
    }
  }

  async function handleWatchLaterMovie() {
    if(user) {
      let newWatchLaterMovies: string[];
      if (addToWatch) {
        newWatchLaterMovies = user.watchLaterMovies.filter(movie => movie !== id);
        setAddToWatch(false);
      } else {
        newWatchLaterMovies = user.watchLaterMovies;
        newWatchLaterMovies.push(id);
        setAddToWatch(true);
      }
      await addMovieToWatchLaterListUseCase.execute(user.id, newWatchLaterMovies);
      setWatchLaterList(newWatchLaterMovies);
    } else {
      alert("You should login first!");
    }
  }

  return <div className="movie-card">
    <div className="info">
      <img src={poster_path} alt="movie-poster" />
      <div className="title-year" onClick={handleShowMovieInfoPage}>
        <strong>{title}</strong>
        <span>{release_year}</span>
      </div>
    </div>
    <div>
      {
        showWatchLater &&
        <button onClick={handleWatchLaterMovie}>
          {
            watchLater ?
              <img src={FillAddImg} alt="star-movie" /> :
              <img src={EmptyAddImg} alt="star-movie" />
          }
        </button>
      }
      {
        showFavorite && 
        <button onClick={handleFavoriteMovie}>
          {
            favorite ?
              <img src={FillStarImg} alt="star-movie" /> :
              <img src={EmptyStarImg} alt="star-movie" />
          }
        </button>
      }
    </div>
  </div>;
}
