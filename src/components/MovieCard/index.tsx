import "./styles.scss";
import EmptyStarImg from "../../assets/empty-star.svg";
import FillStarImg from "../../assets/fill-star.svg";
import { useHistory } from "react-router-dom";

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

  async function handleShowMovieInfoPage() {
    history.push(`/movie/${id}`);
  }

  return <div className="movie-card">
    <div className="info">
      <img src={poster_path} alt="movie-poster" />
      <div className="title-year" onClick={handleShowMovieInfoPage}>
        <strong>{title}</strong>
        <span>{release_year}</span>
      </div>
    </div>
    <button>
      {
        isFavorite ?
          <img src={FillStarImg} alt="star-movie" /> :
          <img src={EmptyStarImg} alt="star-movie" />
      }
    </button>
  </div>;
}
