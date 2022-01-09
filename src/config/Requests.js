const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "b49310d6df7ab899e6abefeb2fda264a";

const requests = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top-rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorroMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default requests;
