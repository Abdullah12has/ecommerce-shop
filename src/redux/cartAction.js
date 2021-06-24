export const toggleCart = (cart) => ({
  type: "TOGGLE_CART",
  payload: cart,
});

export const addToCart = (item) => ({
  type: "ADD",
  payload: item,
});
