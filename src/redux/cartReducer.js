import {addItemToCartHelper} from './cart.helper';


const INITIAL = {
  hidden: true,
  cartItems: []
};
const cartReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD":
        return{
            ...state,
            cartItems: addItemToCartHelper(state.cartItems, action.payload)
        }
    default:
      return state;
  }
};
export default cartReducer;