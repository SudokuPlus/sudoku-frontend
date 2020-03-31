import React, { Component } from "react";
import NoteBoxes from "./NoteBoxes";

let sudokuBoard =
  [[5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]]

export class Board extends Component {
  constructor() {
    super()
    this.state = {
      selectedBox: [],
      prevBox: null,
      selectedNum: 0,
      board: [],
      isSelected: false
    }

  }

  componentWillMount = () => {
    const board = this.buildBoard()
    this.setState({ board })
  }

  render() {
    // console.log(this.state.board, this.state.selectedBox)
    return <div className="boardPageContainer">
      <div className="board">
        {
          this.state.board.map((square1, y) => {
            return <div key={y} className="boxRows">
              {this.state.board[y].map((square2, x) => {
                let otherclassX = (x % 3) === 2 ? 'borderRight' : (x % 3) === 0 ? 'borderLeft' : "";
                let otherclassY = (y % 3) === 2 ? 'borderBottom' : (y % 3) === 0 ? 'borderTop' : "";
                return (
                  <div className={`box ${otherclassX} ${otherclassY}`} id={`${y}-${x}`} key={`${y}-${x}`} onClick={this.onBoxSelect} >
                    {this.numberValue(y, x)}
                  </div>
                )
              })}
            </div>
          })
        }
      </div>
      <div className="numberValueButtonContainer">
        {this.buttonBoard()}
      </div>
    </div>;
  }

  buildBoard = () => {
    let board = []
    for (let y = 0; y < sudokuBoard.length; y++) {
      let boardRow = []
      for (let x = 0; x < sudokuBoard[0].length; x++) {
        boardRow.push(
          sudokuBoard[y][x]
        );
      }
      board.push(boardRow)
    }
    return board;
  };

  buttonBoard = () => {
    let buttonList = []
    for (let i = 1; i < 10; i++) {
      buttonList.push(<button className="numberValueButtons" key={i} value={i} onClick={this.onNumberSelect}>{i}</button>)
    }
    return buttonList
  }

  onBoxSelect = (event) => {
    if (!this.state.isSelected) {
      let selectedKey = event.target.id.split("-")
      document.getElementById(`${selectedKey[0]}-${selectedKey[1]}`).classList.add("selectedBox")
      this.setState({
        selectedBox: selectedKey,
        isSelected: !this.state.isSelected,
        prevBox: event.target
      })
    } else {
      this.state.prevBox.classList.remove("selectedBox")
      let selectedKey = event.target.id.split("-")
      document.getElementById(`${selectedKey[0]}-${selectedKey[1]}`).classList.add("selectedBox")
      this.setState({
        selectedBox: selectedKey,
        prevBox: event.target
      })

    }
  }

  onNumberSelect = (e) => {
    const { selectedBox, board } = this.state
    if (selectedBox !== []) {
      console.log(e.target.value)
      if (sudokuBoard[selectedBox[0]][selectedBox[1]] === 0) {
        let newBoard = board
        newBoard[selectedBox[0]][selectedBox[1]] = parseInt(e.target.value)
        console.log(newBoard)
        this.setState({
          board: newBoard
        })
      }
    }
    // let styledBox = document.getElementById(`${this.state.selectedBox}`)
    // styledBox.classList.remove("selectedBox")
  }

  numberValue = (y, x) => {
    if (this.state.board[y][x] === 0) {
      return <NoteBoxes />
    } else {
      return this.state.board[y][x]
    }
  }
}

export default Board;
