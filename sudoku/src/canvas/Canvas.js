import React, { Component } from "react";

export class Canvas extends Component {
  componentDidMount = () => {
    this.sudokuCanvas();
  };

  render() {
    return (
      <div>
        <canvas ref="canvas2"></canvas>
      </div>
    );
  }

  sudokuCanvas = () => {
    const canvas = this.refs.canvas2;
    canvas.width = window.innerWidth * 0.4;
    canvas.height = window.innerWidth * 0.4;

    const c = canvas.getContext("2d");
    this.drawCubeLines(canvas, c);

    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        c.lineWidth = 1;
        c.strokeRect(
          (canvas.width / 9) * x,
          (canvas.height / 9) * y,
          canvas.width / 9,
          canvas.height / 9
        );
      }
    }
    canvas.addEventListener(
      "mousedown",
      function(evt) {
        let mousePos = getMousePos(canvas, evt);
        console.log(mousePos.x + "," + mousePos.y);
        if (
          mousePos.x > 0 &&
          mousePos.x < canvas.width / 9 &&
          mousePos.y > 0 &&
          mousePos.y < canvas.width / 9
        ) {
          c.fillText("0", canvas.width / 18, canvas.width / 18);
        }
      },
      false
    );

    //Get Mouse Position
    function getMousePos(canvas, evt) {
      let rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  };

  drawCubeLines = (canvas, c) => {
    c.lineWidth = 4;
    // Vertical Lines
    c.beginPath();
    c.moveTo(canvas.width / 3, 0);
    c.lineTo(canvas.width / 3, canvas.width);
    c.stroke();

    c.beginPath();
    c.moveTo((canvas.width / 3) * 2, 0);
    c.lineTo((canvas.width / 3) * 2, canvas.width);
    c.stroke();

    // Horizontal Lines
    c.beginPath();
    c.moveTo(0, canvas.width / 3);
    c.lineTo(canvas.width, canvas.width / 3);
    c.stroke();

    c.beginPath();
    c.moveTo(0, (canvas.width / 3) * 2);
    c.lineTo(canvas.width, (canvas.width / 3) * 2);
    c.stroke();
  };
}

export default Canvas;
