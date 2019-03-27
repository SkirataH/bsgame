import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Field from "./field";
import Home from "./home";
import SignIn from "../components/signin";

class MainRoute extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <Switch>
          <Route path="/game" component={Field} exact />
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
