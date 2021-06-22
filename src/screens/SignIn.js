import React, { Component } from "react";
import "../styles/signin.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { signInWithGoogle } from "../firebase/firebase.setup";
import SignUp from "../components/signin/SignUp";
import { auth } from "../firebase/firebase.setup";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = async event => {
    event.preventDefault();
    const { email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "",
      password: "",})
    }catch(e){
      console.error(e);
    }
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    
  };

  render() {
    return (
      <div className="loginMain">
        <form
          onSubmit={this.submitHandler}
          className="loginForm"
          noValidate
          autoComplete="on"
        >
          <h1>I already have an account</h1>
          <span className="subtitleLogin">
            Sign In with your email and password
          </span>
          <TextField
            value={this.state.email}
            onChange={this.changeHandler}
            className="logintf"
            id="standard-basic"
            label="Email"
            name='email'
          />
          <TextField
            onChange={this.changeHandler}
            className="logintf"
            label="Password"
            type="password"
            id="standard-password-input"
            label="Password"
            name='password'
            value={this.state.password}
          />
          <div className="lbuttonGroup">
            <Button type='submit'  className="btn" variant="contained" color="secondary">
              Sign In
            </Button>
            <Button onClick={signInWithGoogle} className="btn2" variant="contained" color="primary">
              Sign In with Google
            </Button>
          </div>
        </form>

        <SignUp/>

       
      </div>
    );
  }
}
