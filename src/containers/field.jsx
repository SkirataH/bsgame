import React, { Component } from "react";
import Cell from "../components/cell";
import Navbar from "../components/navbar";

class Field extends Component {
  state = {
    cells: [
      { id: "f1", ship: "true", hit: "false" },
      { id: "f2", ship: "false", hit: "false" },
      { id: "f3", ship: "true", hit: "false" },
      { id: "f4", ship: "false", hit: "false" },
      { id: "f5", ship: "true", hit: "false" },
      { id: "f6", ship: "false", hit: "false" },
      { id: "f7", ship: "false", hit: "false" },
      { id: "f8", ship: "true", hit: "false" },
      { id: "f9", ship: "false", hit: "false" },
      { id: "f10", ship: "false", hit: "false" },
      { id: "f11", ship: "false", hit: "false" },
      { id: "f12", ship: "false", hit: "false" },
      { id: "f13", ship: "false", hit: "false" },
      { id: "f14", ship: "false", hit: "false" },
      { id: "f15", ship: "false", hit: "false" },
      { id: "f16", ship: "false", hit: "false" },
      { id: "f17", ship: "false", hit: "false" },
      { id: "f18", ship: "false", hit: "false" },
      { id: "f19", ship: "true", hit: "false" },
      { id: "f20", ship: "false", hit: "false" },
      { id: "f21", ship: "false", hit: "false" },
      { id: "f22", ship: "false", hit: "false" },
      { id: "f23", ship: "true", hit: "false" },
      { id: "f24", ship: "false", hit: "false" },
      { id: "f25", ship: "false", hit: "false" },
      { id: "f26", ship: "false", hit: "false" },
      { id: "f27", ship: "false", hit: "false" },
      { id: "f28", ship: "true", hit: "false" },
      { id: "f29", ship: "false", hit: "false" },
      { id: "f30", ship: "false", hit: "false" }
    ],
    ecells: [
      { id: "e1", ship: "true", hit: "false" },
      { id: "e2", ship: "false", hit: "false" },
      { id: "e3", ship: "true", hit: "false" },
      { id: "e4", ship: "false", hit: "false" },
      { id: "e5", ship: "true", hit: "false" },
      { id: "e6", ship: "false", hit: "false" },
      { id: "e7", ship: "false", hit: "false" },
      { id: "e8", ship: "false", hit: "false" },
      { id: "e9", ship: "false", hit: "false" },
      { id: "e10", ship: "false", hit: "false" },
      { id: "e11", ship: "false", hit: "false" },
      { id: "e12", ship: "false", hit: "false" },
      { id: "e13", ship: "false", hit: "false" },
      { id: "e14", ship: "false", hit: "false" },
      { id: "e15", ship: "false", hit: "false" },
      { id: "e16", ship: "false", hit: "false" },
      { id: "e17", ship: "true", hit: "false" },
      { id: "e18", ship: "true", hit: "false" },
      { id: "e19", ship: "true", hit: "false" },
      { id: "e20", ship: "false", hit: "false" },
      { id: "e21", ship: "false", hit: "false" },
      { id: "e22", ship: "false", hit: "false" },
      { id: "e23", ship: "true", hit: "false" },
      { id: "e24", ship: "false", hit: "false" },
      { id: "e25", ship: "false", hit: "false" },
      { id: "e26", ship: "false", hit: "false" },
      { id: "e27", ship: "false", hit: "false" },
      { id: "e28", ship: "true", hit: "false" },
      { id: "e29", ship: "false", hit: "false" },
      { id: "e30", ship: "false", hit: "false" }
    ],
    totalShips: 0
  };
  handleClick = id => {
    const cells = this.state.cells.map(cell =>
      cell.id === id ? { ...cell, hit: "true" } : cell
    );
    this.setState({ cells });
  };
  handleEnemyClick = id => {
    const ecells = this.state.ecells.map(cell =>
      cell.id === id ? { ...cell, hit: "true" } : cell
    );
    this.setState({ ecells });
  };
  render() {
    return (
      <div className="playField">
        <Navbar />
        <div className="wrapper">
          <div className="lesser_wrap">
            <h2>Your Field</h2>
            <div className="myField">
              {this.state.cells.map(cell => (
                <Cell
                  ship={cell.ship}
                  key={cell.id}
                  id={cell.id}
                  onHit={this.handleClick}
                  hit={cell.hit}
                />
              ))}
            </div>
          </div>
          <div className="lesser_wrap">
            <h2>Enemy Field</h2>
            <div className="myField">
              {this.state.ecells.map(cell => (
                <Cell
                  ship={cell.ship}
                  key={cell.id}
                  id={cell.id}
                  onHit={this.handleEnemyClick}
                  hit={cell.hit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Field;
