import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import data from "./data/data";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");

  const drumPads = data.map((item) => {
    return <DrumPad key={item.id} {...item} setDisplay={setDisplay} />;
  });
  return (
    <div className="App">
      <div id="drum-machine">
        <Display display={display} />
        {drumPads}
      </div>
    </div>
  );
}
