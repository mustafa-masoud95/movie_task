const API_URL: string = "https://api.themoviedb.org/3/";
const API_KEY: string | undefined = "5c1a7f84b13a314e22aed4a212650c0d";

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const TRENDING_URL: string = `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`;
const TOP_RATED_URL: string = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const POPULAR_BASE_URL: string = `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US`;
const TV_LATEST_URL: string = `${API_URL}/tv/latest?api_key=${API_KEY}&language=en-US`;
const IMAGE_BASE_URL: string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = "w780";

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TOP_RATED_URL,
  TRENDING_URL,
  TV_LATEST_URL
};
