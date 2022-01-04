import DrumPad from "./DrumPad";
import data from "./data";
import React from "react";

export default function App() {
  const drumPads = data.map((item) => {
    return <DrumPad key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        {drumPads}
      </div>
    </div>
  );
}
