import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import SignIn from "./screens/SignIn";
import { auth, createUserProfileDoc } from "./firebase/firebase.setup";
import { setUser } from "./redux/userActions";
import Hats from "./screens/Hats";
import Checkout from "./screens/Checkout";


// follows single responsibility principle each component is has a single functionality Reducers, actions, UI components 
// objects like React.Component, screens/hats are open for extension but closed for modification
// follows Liskov Substitution Principle. child classes can replace the parent classes like any can replace react.Component because their the children classes 
// Interface Segregation Principle is followed because you can use most of the components without importing any other functions/components that are used with them. And all unused components are not imported inside components 
// dependency inversion principle is followed because it doesn't matter to the functions and components how the data is being send to them by parents and what's going on inside other functions 



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
            ...snapShot.data(),
          });
        });
      }
      setUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.DeAuth();
  }

  render() {
    return (
      <div id='container'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/*" component={Hats} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              path="/signin"
              render={() =>
                this.props.cuser ? <Redirect to="/" /> : <SignIn />
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { cuser } }) => ({
  cuser,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
