import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/shop" component={Shop} />
        </Switch>
        </BrowserRouter>
      
      </div>
    );
  }
}


