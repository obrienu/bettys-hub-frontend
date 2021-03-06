import axios from "axios";
import {
  LOADING_RICH,
  LOAD_RICH,
  LOAD_PREVIEW,
  LOAD_SINGLE_PRODUCT,
  CLEAR_SINGLE_PRODUCT
} from "./rich.types";
import { getError } from "../errors/error.actions";

let api = "https://bettys-api.herokuapp.com" //"http://localhost:5000" ||;

export const getPreview = () => dispatch => {
  dispatch({
    type: LOADING_RICH
  });

  axios
    .get(`${api}/api/rich/preview`)
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
    .get(`${api}/api/rich/`)
    .then(res =>
      dispatch({
        type: LOAD_RICH,
        payload: res.data
      })
    )
    .catch(err => getError(err.response.data.msg, err.response.status));
};

export const getSingleProduct = id => dispatch => {
  dispatch({
    type: CLEAR_SINGLE_PRODUCT
  });

  axios
    .get(`${api}/api/rich/${id}`)
    .then(res =>
      dispatch({
        type: LOAD_SINGLE_PRODUCT,
        payload: res.data
      })
    )
    .catch(err => getError(err.response.data.msg, err.response.status));
};
