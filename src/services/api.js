require('dotenv').config();
const API_KEY = process.env.TMDB_API_KEY;
if (!API_KEY) {
    throw new Error("TMDB_API_KEY is not defined in the environment variables");
}
if (!process.env.TMDB_API_KEY) {
    throw new Error("TMDB_API_KEY is not set in the environment variables");
}
if (API_KEY === "") {
    throw new Error("TMDB_API_KEY is empty");   
}


const BASE_URL = "https://api.themovidb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async () => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json
    return data.results;
}