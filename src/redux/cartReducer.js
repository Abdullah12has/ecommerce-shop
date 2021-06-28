import { addItemToCartHelper, reduceFromCartHelper } from "./cart.helper";

const INITIAL = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD":
      return {
        ...state,
        cartItems: addItemToCartHelper(state.cartItems, action.payload),
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      case 'REDUCE_FROM_CART':
        return{
          ...state,
        cartItems: reduceFromCartHelper(state.cartItems, action.payload),
        }
    default:
      return state;
  }
};
export default cartReducer;
