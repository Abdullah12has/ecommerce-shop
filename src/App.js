import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import SignIn from "./screens/SignIn";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Header/>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignIn} />
        </Switch>
        </BrowserRouter>
      
      </div>
    );
  }
}


