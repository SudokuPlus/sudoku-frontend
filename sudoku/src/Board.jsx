import React, { Component } from "react";
import NoteBoxes from "./NoteBoxes";

export class Board extends Component {
  componentDidMount = () => { };
  render() {
    return <div className="board">
      {this.buildBoard()}
    </div>;
  }

  buildBoard = () => {
    let board = [];
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        board.push(
          <div key={"y" + "x"} className="box">
            <NoteBoxes />
          </div>
        );
      }
    }
    return board;
  };
}

export default Board;
