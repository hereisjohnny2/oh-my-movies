import { AxiosInstance } from "axios";
import { Movie } from "../../domain/entities/Movie";
import { IMoviesDataSource } from "../../infra/datasources/IMoviesDataSource";
import { TMDBMovieResult } from "../types/TMDBMovieResult";
import NoPosterImg from "../../../../assets/no-poster.png";
import { MovieSearchResponseDTO } from "../../domain/dto/MovieSearchResponseDTO";

class TMDBMoviesDataSource implements IMoviesDataSource {  
  constructor(
    private httpService: AxiosInstance
  ) {}

  api_key = "696d88d8009e5f9ec856621163017e4a";
  
  async getByTitle(title: string, page: number): Promise<MovieSearchResponseDTO> {
    const response = await this.httpService.get("/search/movie", {
      params: {
        api_key: this.api_key,
        query: title,
        page,
        language: "en-US",
        include_adult: "false"
      }
    });

    if (response.status === 404) {
      throw new Error("There are no movies with this title");
    }    
  
    const { total_pages } = response.data;
    const moviesResult: TMDBMovieResult[] = response.data.results;
  
    const moviesList = moviesResult.map(result => new Movie({
        id: result.id.toString(),
        title: result.title,
        overview: result.overview,
        poster_path: result.poster_path ?
          `https://image.tmdb.org/t/p/w500${result.poster_path}`:
          NoPosterImg,
        release_date: new Date(result.release_date),
        vote_average: result.vote_average,
      })
    );

    return { 
      moviesList,
      total_pages
    };
  }

  async getById(id: string): Promise<Movie> {
    const response = await this.httpService.get(`/movie/${id}`, {
      params: {
        api_key: this.api_key,
        language: "en-US",
      }
    });

    if (response.status === 404) {
      throw new Error("There are no movies with this title");
    }
    
    const { data } = response;

    const movie = new Movie({
      id: data.id.toString(),
      title: data.title,
      overview: data.overview,
      poster_path: data.poster_path ?
        `https://image.tmdb.org/t/p/w500${data.poster_path}`:
        NoPosterImg,
      release_date: new Date(data.release_date),
      vote_average: data.vote_average,
    });

    return movie;
  }
}

export { TMDBMoviesDataSource }