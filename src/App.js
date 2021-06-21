import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import SignIn from "./screens/SignIn";
import { auth } from "./firebase/firebase.setup";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  DeAuth = null;

  componentDidMount() {
    this.DeAuth = auth.onAuthStateChanged((u) => {
      this.setState({ user: u });
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
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
