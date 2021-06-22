import React, { Component } from "react";
import "../../styles/signin.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth, createUserProfileDoc } from "../../firebase/firebase.setup";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  submitHandler = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName: name });
      this.setState({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (e) {
      console.error(e);
    }
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form
          className="loginForm"
          noValidate
          autoComplete="on"
          onSubmit={this.submitHandler}
        >
          <h1>I do not have an account</h1>
          <span className="subtitleLogin">
            Sign Up with your email and password
          </span>
          <TextField
            value={this.state.name}
            onChange={this.changeHandler}
            name="name"
            className="logintf"
            id="standard-basic"
            label="Name"
          />
          <TextField
            className="logintf"
            id="standard-basic"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <TextField
            className="logintf"
            label="Password"
            type="password"
            id="standard-password-input"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <TextField
            className="logintf"
            label="Confirm Password"
            type="password"
            id="standard-password-input"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.changeHandler}
          />
          <Button
            type="submit"
            className="btn"
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
