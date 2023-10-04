import getDetails from '@/utils/getMovieDetails';
import Image from 'next/image';
import React from 'react'

interface ParamsType {
  params: {
    movieDetails: string;
  };
}

interface DetailsType {
  backdrop_path: string,
  poster_path: string,
  vote_count: number
}

const Details:React.FC<ParamsType> = async({ params }) => {
const id  = params.movieDetails
    const details: DetailsType = await getDetails(id)
    console.log(details)
  return (
    <div>
             <Image
          className="rounded-lg"
          width={400}
          height={400}
          alt="movie_image"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        />
      <h1 className='text-white'>Total Vote: { details.vote_count}</h1>
    </div>
  )
}

export default Details