export default async function getMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API}&language=en-US&page=1`)
    const data = await res.json()
    return data
}