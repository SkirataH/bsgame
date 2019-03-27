import React, { Component } from "react";
import Navbar from "./navbar";
import LoginForm from "./loginform";

class SignIn extends Component {
  render() {
    return (
      <div className="signIn_main">
        <Navbar />
        <LoginForm />
      </div>
    );
  }
}

export default SignIn;
