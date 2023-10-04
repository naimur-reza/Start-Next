const url = 'https://api.themoviedb.org/3/movie/790493?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`
  }
};

 
export default async function getDetails(id: string) {
    console.log(process.env.MOVIE_API)
    const res = await fetch(url,options);
  const details = await res.json();
  return details;
}


 

