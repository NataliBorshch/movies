import { createAction } from "@reduxjs/toolkit";

const getGenresRequest = createAction("movies/getGenresRequest");
const getGenresSuccess = createAction("movies/getGenresSuccess");
const getGenresError = createAction("movies/getGenresError");

export default {
  getGenresRequest,
  getGenresSuccess,
  getGenresError,
};
