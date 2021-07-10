interface MovieDTO {
  id: string;
  title: string;
  release_date: Date;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export type { MovieDTO }