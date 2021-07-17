import action from "./genres-action";
import api from "../../service/api";

const getAllGenres = () => (dispatch) => {
  dispatch(action.getGenresRequest);
  api
    .getGenres()
    .then(({ genres }) => {
      return dispatch(action.getGenresSuccess(genres));
    })
    .catch((error) => dispatch(action.getMoviesError(error.message)));
};

const getTVSearch = () => (dispatch) => {};

export default { getAllGenres, getTVSearch };
