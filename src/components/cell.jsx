import React, { Component } from "react";

class Cell extends Component {
  render() {
    const { ship, hit, id, onHit } = this.props;
    return (
      <div
        className="singleCell"
        id={id}
        onClick={() => onHit(id)}
        hit={hit}
        ship={ship}
        style={{
          backgroundColor:
            hit === "true" && ship === "true"
              ? "red"
              : hit === "true" && ship === "false"
              ? "gray"
              : ""
        }}
      />
    );
  }
}

export default Cell;
