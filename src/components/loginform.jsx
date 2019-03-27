import React, { Component } from "react";

class LoginFomr extends Component {
  render() {
    return (
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
    );
  }
}

export default LoginFomr;
