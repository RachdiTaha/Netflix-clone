const API_KEY = "0392b694ce258a53e1a302247c27a0dd";

const baseURL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseURL}/trending/all/week?api=${API_KEY}`,
  fetchNetflixOriginals: `${baseURL}/trending/all/week?api=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top-rated?api-key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api-key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api-key=${API_KEY}&width_genres=35`,
  fetchHorroMovies: `${baseURL}/discover/movie?api-key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api-key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api-key=${API_KEY}&width_genres=99`,
};

export default requests;
