import { MovieDTO } from "../dto/MovieDTO";

class Movie {
  id: string;
  title: string;
  release_date: Date;
  overview: string;
  poster_path: string;
  vote_average: number;

  constructor({
    id, 
    title, 
    release_date, 
    overview, 
    poster_path, 
    vote_average
  }: MovieDTO) {
    this.id = id;;
    this.title = title;
    this.release_date = release_date;
    this.overview = overview;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
  }
}

export { Movie }