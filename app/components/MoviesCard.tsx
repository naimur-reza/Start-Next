"use client";
import React from "react";
import Movie from "../movies/page";
import Image from "next/image";

interface MoviesCardProps {
  movie: Movie;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ movie }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          width={400}
          height={400}
          alt="movie_image"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {movie.title}
          <div className="badge badge-secondary">{movie.release_date}</div>
        </h2>
        <p>{movie.overview.slice(0,100)}...</p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline">{ movei}</div>  */}
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
