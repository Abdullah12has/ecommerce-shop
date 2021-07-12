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

// each of the Actions follow Single-Responsibility Principle 
// follows Interface Segregation Principle because all the actions are not together, they're seperated and can be implemented individually
