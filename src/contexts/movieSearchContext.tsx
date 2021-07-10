import { ReactNode } from "react";
import { createContext, useState } from "react";
import { Movie } from "../modules/Movies/domain/entities/Movie";

type MovieSearchContextType = {
  movieSearchList: Movie[],
  titleInput: string,
  setTitleInput(input: string): void,
  setMovieSearchList(movieList: Movie[]): void,
}

type MovieSearchProviderType = {
  children: ReactNode,
}

export const MovieSearchContext = createContext({} as MovieSearchContextType);

export function MovieSearchProvider(props: MovieSearchProviderType) {
  const [titleInput, setTitleInput] = useState("");
  const [movieSearchList, setMovieSearchList] = useState<Movie[]>([]);

  return (
    <MovieSearchContext.Provider 
      value = {{
        movieSearchList,
        titleInput,
        setTitleInput,
        setMovieSearchList,
      }}
    >
      {props.children}
    </MovieSearchContext.Provider>
  )

}