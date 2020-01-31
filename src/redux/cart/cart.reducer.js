import {
  ADD_CARTITEM,
  CLEAR_CART,
  TOGGLE_CART,
  DELETE_ITEMS
} from "./cart.types";
import { checkDuplicate, deleteItemFromCart } from "./cart.utils";
const initialState = {
  cartMenu: false,
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARTITEM:
      return {
        ...state,
        loading: false,
        cart: checkDuplicate(state.cart, action.payload)
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartMenu: !state.cartMenu
      };
    case DELETE_ITEMS:
      return {
        ...state,
        cart: deleteItemFromCart(state.cart, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
