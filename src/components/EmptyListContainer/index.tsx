import MovieImg from "../../assets/movie.svg";
import "./styles.scss";

export function EmptyListContainer() {
  return (
    <div className="empty-list">
      <img src={MovieImg} alt="movie-theater" />
      <p>Use the SearchBox to find what to watch next!</p>
    </div>
  );
}