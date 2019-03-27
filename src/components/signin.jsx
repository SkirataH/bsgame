import React, { Component } from "react";
import Navbar from "./navbar";

class SignIn extends Component {
  render() {
    return (
      <div className="signIn_main">
        <Navbar />
        <form action="">
          <input
            type="text"
            name="login"
            id="login_user"
            placeholder="Enter Your E-mail"
          />
          <input
            type="password"
            name="login"
            id="login_password"
            placeholder="Enter Your Password"
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
