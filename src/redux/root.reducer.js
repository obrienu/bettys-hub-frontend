import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";
import errorReducer from "./errors/error.reducer";
import cartReducer from "./cart/cart.reducer";
import richReducer from "./rich/rich.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  error: errorReducer,
  cart: cartReducer,
  rich: richReducer
});

export default rootReducer;
