import axios from "axios";

const apiKey = "api_key=42c4fa9c05708253e8c2f9a05f447e85";

const baseURL = "https://api.themoviedb.org";

const getTrending = () => {
  const poin = "/3/trending/all/week?";
  const url = `${baseURL}${poin}${apiKey}`;
  return axios.get(url).then((res) => res.data);
};

const getPopularMovies = () => {
  const poin = "/3/movie/popular?";
  const url = `${baseURL}${poin}${apiKey}&language=en-US&page=1`;
  return axios.get(url).then((res) => res.data);
};

const getPopularTV = () => {
  const point = "/3/tv/popular?";
  const url = `${baseURL}${point}${apiKey}&language=en-US&page=1`;
  return axios.get(url).then((res) => res.data);
};

const getPopularActors = () => {
  const point = "/3/person/popular?";
  const url = `${baseURL}${point}${apiKey}&language=en-US&page=1`;
  return axios.get(url).then((res) => res.data);
};

const getGenres = () => {
  const poin = "/3/genre/movie/list?";
  const url = `${baseURL}${poin}${apiKey}&language=en-US`;
  return axios.get(url).then((res) => res.data);
};

// const getGenres = () => {
//   const poin = "/3/genre/movie/list?";
//   const url = `${baseURL}${poin}${apiKey}&language=en-US`;
//   axios.get(url).then((res) => console.log(res.data));
// };
// const getDetailsTV = () => {
//   "https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US";
// };

// const getRevievs = () => {
//   "https://api.themoviedb.org/3/review/{review_id}?api_key=<<api_key>>";
// };

// const getVideosTV = () => {
//   "https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US";
// };

// const getLatersTV = () => {
//   "https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US";
// };

// const getPersonalDetails = () => {};
export default {
  getTrending,
  getPopularMovies,
  getPopularTV,
  getPopularActors,
  getGenres,
};
