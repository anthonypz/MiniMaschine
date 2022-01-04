import React from "react";

export default function DrumPad({ keyPress, id }) {
  return (
    <button className="drum-pad" id={id}>
      <p>{keyPress}</p>
      <audio className="clip" id={keyPress}></audio>
    </button>
  );
}
