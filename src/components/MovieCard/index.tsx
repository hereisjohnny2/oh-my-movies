interface MovieCardProps {
  title: string;
  poster_path?: string;
  release_year: string;
  isFavorite: boolean;
}

export function MovieCard({ 
  title, 
  release_year, 
  isFavorite, 
  poster_path
}: MovieCardProps) {
  return <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="movie-poster" />
    <div className="basic-info-container">
      <strong>{title}</strong>
      <span>{release_year}</span>
    </div>
    <button>
      <img src="" alt="star movie" />
    </button>
  </div>;
}
