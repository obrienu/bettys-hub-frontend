import {
  LOADING_ITEM,
  ADD_CARTITEM,
  CLEAR_CART,
  TOGGLE_CART,
  DELETE_ITEMS
} from "./cart.types";

export const addCartItem = item => dispatch => {
  dispatch({
    type: LOADING_ITEM
  });

  dispatch({
    type: ADD_CARTITEM,
    payload: item
  });
};

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  });
};

export const toggleCart = () => dispatch => {
  dispatch({
    type: TOGGLE_CART
  });
};

export const deleteItem = item => {
  return {
    type: DELETE_ITEMS,
    payload: item
  };
};
