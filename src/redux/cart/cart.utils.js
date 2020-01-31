export const checkDuplicate = (cartItems, item) => {
  let filtertCart = cartItems.filter(itemData => itemData._id !== item._id);
  return [item, ...filtertCart];
};
export const deleteItemFromCart = (cartItems, itemToDelete) => {
  return cartItems.filter(
    cartItem => cartItem._id !== itemToDelete._id && cartItem
  );
};
