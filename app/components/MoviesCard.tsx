import React from "react";
 
import Image from "next/image";
import { Movie } from "@/utils/MovieType";

interface MoviesCardProps {
  movie: Movie;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ movie }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl  cursor-not-allowed">
      <figure>
        <Image
          className="rounded-lg"
          width={400}
          height={400}
          alt="movie_image"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-gray-300 text-lg">
          {movie.title}
        </h2>
          <div className="text-yellow-700">{movie.release_date}</div>
        <p className="text-slate-600">{movie.overview.slice(0,100)}...</p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline">{ movei}</div>  */}
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
