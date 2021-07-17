import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./tv-action";

const popularTV = createReducer([], {
  [action.getTVSuccess]: (_, { payload }) => payload,
});

const TVReducer = combineReducers({
  popularTV,
});

export default TVReducer;
