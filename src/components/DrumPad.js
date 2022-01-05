import { useRef, useEffect } from "react";

export default function DrumPad({ keyPress, keyCode, id, audio, setDisplay }) {
  const sample = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.keyCode === keyCode) {
      sample.current.currentTime = 0;
      sample.current.play();
      setDisplay(label.current.id);
    }
  };

  const handleClick = () => {
    sample.current.currentTime = 0;
    sample.current.play();
    setDisplay(label.current.id);
  };

  return (
    <button
      ref={label}
      className="drum-pad p-8 border-2 border-gray-100"
      id={id}
      onClick={handleClick}
    >
      <p>{keyPress}</p>
      <audio ref={sample} className="clip" id={keyPress} src={audio}></audio>
    </button>
  );
}
