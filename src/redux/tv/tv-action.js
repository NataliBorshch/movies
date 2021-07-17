import { createAction } from "@reduxjs/toolkit";

const getTVRequest = createAction("movies/getTVRequest");
const getTVSuccess = createAction("movies/getTVSuccess");
const getTVError = createAction("movies/getTVError");

export default {
  getTVRequest,
  getTVSuccess,
  getTVError,
};
