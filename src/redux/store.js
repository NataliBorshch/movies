import moviesReducer from "./movie/movies-reducer";
import TVReducer from "./tv/tv-reducer";
import genresReducer from "./genres/genres-reducer";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import logger from 'redux-logger';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const rootReducer = combineReducers({
  movies: moviesReducer,
  tv: TVReducer,
  genres: genresReducer,

  //   auth: persistReducer(persistConfig, authUserReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
