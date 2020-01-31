import { createSelector } from "reselect";

const cartShop = state => state.cart;

export const selectCartItemsCount = createSelector(
  [cartShop],
  cart => cart.cart.length
);

export const cartItemsSelector = createSelector([cartShop], cart => cart.cart);

export const cartMenuSelector = createSelector(
  [cartShop],
  cart => cart.cartMenu
);
