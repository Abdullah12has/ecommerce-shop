import { Hidden } from "@material-ui/core";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {user:{}, cart:{hidden:Boolean,cartItems:[]}};

const middlewares = persistedState;


const store = createStore(rootReducer, middlewares);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })


export default store;
