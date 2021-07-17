import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./movies-action";

const popularMovies = createReducer([], {
  [action.getMoviessSuccess]: (_, { payload }) => payload,
});

console.log(popularMovies);

const moviesReducer = combineReducers({
  popularMovies,
});

export default moviesReducer;
