import { createAction } from "@reduxjs/toolkit";

const getMoviesRequest = createAction("movies/getMoviesRequest");
const getMoviessSuccess = createAction("movies/getMoviesSuccess");
const getMoviesError = createAction("movies/getMoviesError");

export default {
  getMoviesRequest,
  getMoviessSuccess,
  getMoviesError,
};
