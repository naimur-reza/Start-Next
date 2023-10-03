import getMovies from "@/utils/getMovies";
import React from "react";
import MoviesCard from "../components/MoviesCard";

interface Movie {
  title: string; // Use lowercase "string" instead of uppercase "String"
  release_date: string;
  overview: string;
  backdrop_path: string;
}

const Movie = async () => {
  const moviesData = await getMovies();
  console.log(moviesData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-12 mt-10">
      {moviesData.results.map((movie: Movie) => (
        <MoviesCard movie={movie} />
      ))}
    </div>
  );
};

export default Movie;
