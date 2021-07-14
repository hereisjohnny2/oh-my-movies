import "./styles.scss";
import EmptyStarImg from "../../assets/empty-star.svg";
import FillStarImg from "../../assets/fill-star.svg";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { favoriteMovieUseCase } from "../../modules/Users/domain/useCases/favoriteMovieUseCase";
import { useState } from "react";

interface MovieCardProps {
  id: string,
  title: string;
  poster_path?: string;
  release_year: string;
  isFavorite: boolean;
}

export function MovieCard({
  id,
  title,
  release_year,
  isFavorite,
  poster_path
}: MovieCardProps) {
  const history = useHistory();
  const { user, setFavoriteList } = useAuth();
  const [favorite, setFavorite] = useState(isFavorite);

  async function handleShowMovieInfoPage() {
    history.push(`/movie/${id}`);
  }

  async function handleFavoriteMovie() {
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
  }

  return <div className="movie-card">
    <div className="info">
      <img src={poster_path} alt="movie-poster" />
      <div className="title-year" onClick={handleShowMovieInfoPage}>
        <strong>{title}</strong>
        <span>{release_year}</span>
      </div>
    </div>
    <button onClick={handleFavoriteMovie}>
      {
        favorite ?
          <img src={FillStarImg} alt="star-movie" /> :
          <img src={EmptyStarImg} alt="star-movie" />
      }
    </button>
  </div>;
}
