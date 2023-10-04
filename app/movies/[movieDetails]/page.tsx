import getDetails from "@/utils/getMovieDetails";
import Image from "next/image";

interface ParamsType {
  params: {
    movieDetails: string;
  };
}

interface Genre {
  id: number;
  name: string;
}
interface DetailsType {
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  overview: string;
  revenue: number;
  genres: Genre[];
}

const Details: React.FC<ParamsType> = async ({ params }) => {
  const id = params?.movieDetails;
  const details: DetailsType = await getDetails(id, 3000);
  console.log(details);
  return (
    <div className="max-w-lg mx-auto space-y-2">
      <Image
        className="rounded-lg  "
        width={500}
        height={400}
        alt="movie_image"
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
      />
      <h1 className="text-white text-lg mt-3">{details.original_title}</h1>
      <h1 className="text-white">Liked: {details.vote_count}</h1>
      <p className="text-zinc-500">Overview: {details.overview}</p>
      <span className="text-yellow-500">Revenue: ${details.revenue}</span>
      <ul className="text-pink-500/60 font-medium">
        {details.genres.map((genre, i) => (
          <li key={i}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
