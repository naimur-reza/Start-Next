import { delay } from "./getMovies";

 
const options = {
  
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`
  },
   
};

 
export default async function getDetails(id: string, time: number = 0) {
  await delay(time)
    console.log(process.env.MOVIE_API)
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{...options,  });
  const details = await res.json();
  return details;
}


 

