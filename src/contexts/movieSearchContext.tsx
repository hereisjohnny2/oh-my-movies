import { ReactNode } from "react";
import { createContext, useState } from "react";
import { Movie } from "../modules/Movies/domain/entities/Movie";

type MovieSearchContextType = {
  movieSearchList: Movie[],
  titleInput: string,
  totalPages: number,
  page: number,
  isLoading: boolean,
  setPage(page: number): void,
  setTitleInput(input: string): void,
  setMovieSearchList(movieList: Movie[]): void,
  setTotalPages(totalPages: number): void,
  setIsLoading(loading: boolean): void,
}

type MovieSearchProviderType = {
  children: ReactNode,
}

export const MovieSearchContext = createContext({} as MovieSearchContextType);

export function MovieSearchProvider(props: MovieSearchProviderType) {
  const [titleInput, setTitleInput] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [movieSearchList, setMovieSearchList] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MovieSearchContext.Provider 
      value = {{
        movieSearchList,
        titleInput,
        totalPages,
        page,
        isLoading,
        setTitleInput,
        setMovieSearchList,
        setTotalPages,
        setPage,
        setIsLoading
      }}
    >
      {props.children}
    </MovieSearchContext.Provider>
  )

}