export const addItemToCartHelper = (cartItems, newItem) => {
  const existingItem = cartItems.find((item) => item.id === newItem.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};


export const reduceFromCartHelper = (cartItems, deleteItem) => {
  const existingItem = cartItems.find((item) => item.id === deleteItem.id);
  if(existingItem.quantity === 1){
    return cartItems.filter(item => item.id !== deleteItem.id)
  }
  return cartItems.map(item => item.id === deleteItem.id ? {...item, quantity: item.quantity -1}
    : item
    )
}
