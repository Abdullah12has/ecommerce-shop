import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {connect} from "react-redux";
import Header from "./components/header/Header";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import SignIn from "./screens/SignIn";
import { auth, createUserProfileDoc } from "./firebase/firebase.setup";
import  {setUser}  from "./redux/userActions";

class App extends Component {
  DeAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.DeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserProfileDoc(userAuth);
        userReference.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setUser(userAuth);
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
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});
export default connect(null, mapDispatchToProps)(App);
