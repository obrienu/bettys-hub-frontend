import axios from "axios";
import { LOADING_RICH, LOAD_RICH, LOAD_PREVIEW } from "./rich.types";
import { getError } from "../errors/error.actions";

export const getPreview = () => dispatch => {
  dispatch({
    type: LOADING_RICH
  });

  axios
    .get("api/rich/preview")
    .then(res =>
      dispatch({
        type: LOAD_PREVIEW,
        payload: res.data
      })
    )
    .catch(err => getError(err.response.data.msg, err.response.status));
};

export const getRich = () => dispatch => {
  dispatch({
    type: LOADING_RICH
  });

  axios
    .get("api/rich/")
    .then(res =>
      dispatch({
        type: LOAD_RICH,
        payload: res.data
      })
    )
    .catch(err => getError(err.response.data.msg, err.response.status));
};
