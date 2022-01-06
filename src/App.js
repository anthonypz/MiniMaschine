import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import data from "./data/data";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("Drum Machine");

  const drumPads = data.map((item) => {
    return <DrumPad key={item.id} {...item} setDisplay={setDisplay} />;
  });
  return (
    <div className="App w-screen min-h-screen flex justify-center items-center bg-gray-400 px-2 sm:px-0">
      <div
        id="drum-machine"
        className="grid gap-3 grid-cols-3 grid-rows-4 w-96 p-8 rounded bg-gray-600 shadow-2xl"
      >
        <Display display={display} />
        {drumPads}
      </div>
    </div>
  );
}
