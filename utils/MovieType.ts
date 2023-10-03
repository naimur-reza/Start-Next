export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
}

export interface MoviesType  {
  page: number
  results: Movie[]
}