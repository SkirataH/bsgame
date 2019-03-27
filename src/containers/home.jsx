import React, { Component } from "react";
import Navbar from "../components/navbar";

class Home extends Component {
  render() {
    return (
      <div className="mainWindow">
        <Navbar />
        <h1>
          battleships <br /> <span>the game</span>
        </h1>
      </div>
    );
  }
}

export default Home;
