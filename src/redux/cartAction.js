export const toggleCart = (cart) => ({
  type: "TOGGLE_CART",
  payload: cart,
});

export const addToCart = (item) => ({
  type: "ADD",
  payload: item,
});

export const DeleteFromCart = (item) => ({
  type: "DELETE_FROM_CART",
  payload: item,
});


export const ReduceFromCart = (item) => ({
  type: "REDUCE_FROM_CART",
  payload: item,
});
