import React from "react";
import MoviesCard from "../components/MoviesCard";
import { Movie, MoviesType } from "@/utils/MovieType";
import getMovies from "@/utils/getMovies";

const Movies = async () => {
  const moviesData: MoviesType = await getMovies(3000);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mt-10 mx-14 justify-items-center place-items-center">
        {moviesData.results.map((movie: Movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
