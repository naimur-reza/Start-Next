import getMovies from "@/utils/getMovies";
import React from "react";
import MoviesCard from "../components/MoviesCard";

interface Movie {
  title: string; // Use lowercase "string" instead of uppercase "String"
  release_date: string;
  overview: string;
  backdrop_path: string;
}

const MovieList = async () => {
//   const moviesData = await getMovies();
//   console.log(moviesData);
//   return (
//     <div>
//       {moviesData.results.map((movie: Movie) => (
//         <MoviesCard movie={movie} />
//       ))}
//       s
//     </div>
//   );
};

export default MovieList;
