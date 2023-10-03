import getMovies from "@/utils/getMovies";
import React from "react";
import MoviesCard from "../components/MoviesCard";
import { Movie } from "@/utils/MovieType";

 

const Movies = async () => {
  const moviesData = await getMovies();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mt-10 mx-14">
      {moviesData.results.map((movie : Movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
