import React from "react";

const NoteBoxes = () => {
  let notes = [];
  for (let i = 1; i < 10; i++) {
    notes.push(
      <div key={i} className="noteNumbers">
        {i}
      </div>
    );
  }
  return notes;
};

export default NoteBoxes;
