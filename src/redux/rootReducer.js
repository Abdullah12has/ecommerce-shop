import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});

// releasing new objects everytime there is a change that's functional 
