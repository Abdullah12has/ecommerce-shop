import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import {getCLS, getFID, getLCP, getTTFB, getFCP} from 'web-vitals';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

getCLS(console.log); //Cumulative Layout Shift < 0.1
getFID(console.log); //  First Input Delay < 100ms
getLCP(console.log);// Largest Contentful Paint < 2.5 sec
getFCP(console.log);//First Contentful Paint
getTTFB(console.log);// Reduce server response times
// https://web.dev/vitals/ for more info about these vitals
