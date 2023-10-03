import getMovies from "@/utils/getMovies";
import React from "react";
import MoviesCard from "../components/MoviesCard";

interface Movie {
    id:number,
  title: string; // Use lowercase "string" instead of uppercase "String"
  release_date: string;
  overview: string;
  backdrop_path: string;
}

const Movies = async () => {
  const moviesData = await getMovies();
  console.log(moviesData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mt-10 mx-14">
      {moviesData.results.map((movie: Movie,) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
