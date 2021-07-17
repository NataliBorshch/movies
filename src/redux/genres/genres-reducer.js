import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./genres-action";

const genres = createReducer([], {
  [action.getGenresSuccess]: (_, { payload }) => payload,
});

console.log(genres);

const genresReducer = combineReducers({
  genres,
});

export default genresReducer;
