import React, { Component } from "react";
import Navbar from "./navbar";

class SignIn extends Component {
  render() {
    return (
      <div className="signIn_main">
        <Navbar />
        <input
          type="text"
          name="login"
          id="login_user"
          placeholder="Enter Your E-mail"
        />
      </div>
    );
  }
}

export default SignIn;
