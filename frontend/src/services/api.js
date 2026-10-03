
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

// Throw on a bad response (e.g. missing/invalid key) so callers show an error instead of crashing on undefined results
const fetchMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || `TMDB request failed (${response.status})`);
    return data.results;
}

export const getMoviesList = async () => {
    return fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
}

export const searchMoviesList = async (query) => {
    return fetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
}
