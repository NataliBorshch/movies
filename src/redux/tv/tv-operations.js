import action from "./tv-action";
import api from "../../service/api";

const getPopularTV = () => (dispatch) => {
  dispatch(action.getTVRequest());
  api
    .getPopularTV()
    .then(({ results }) => {
      console.log(results);
      return dispatch(action.getTVSuccess(results));
    })
    .catch((error) => dispatch(action.getTVError(error.message)));
};

const getTVSearch = () => (dispatch) => {};

export default { getPopularTV, getTVSearch };
