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
      selectPad();
    }
  };

  const handleClick = () => {
    sample.current.currentTime = 0;
    sample.current.play();
    setDisplay(label.current.id);
    selectPad();
  };

  const selectPad = () => {
    label.current.classList.add(
      "brightness-125",
      "translate-x-0.5",
      "translate-y-0.5"
    );
    setTimeout(() => {
      label.current.classList.remove(
        "brightness-125",
        "translate-x-0.5",
        "translate-y-0.5"
      );
    }, 125);
  };

  return (
    <button
      ref={label}
      className="drum-pad border-2 rounded border-gray-100 bg-gray-200 text-gray-50 font-inter text-lg shadow"
      id={id}
      onClick={handleClick}
    >
      {keyPress}
      <audio ref={sample} className="clip" id={keyPress} src={audio}></audio>
    </button>
  );
}
