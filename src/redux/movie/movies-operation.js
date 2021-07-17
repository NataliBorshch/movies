import action from "./movies-action";
import api from "../../service/api";

const getPopularMovies = () => (dispatch) => {
  dispatch(action.getMoviesRequest());
  api
    .getPopularMovies()
    .then(({ results }) => {
      console.log(results);
      return dispatch(action.getMoviessSuccess(results));
    })
    .catch((error) => dispatch(action.getMoviesError(error.message)));
};

const getMoviesSearch = () => (dispatch) => {};

export default { getPopularMovies, getMoviesSearch };
