import kick808 from "./samples/Kick808.wav";
import kick from "./samples/Kick.wav";
import clap from "./samples/Clap1.wav";
import snare from "./samples/Snare.wav";
import hiHat from "./samples/Hihat.wav";
import hiHat2 from "./samples/Hihat2.wav";
import vocal1 from "./samples/vocal1.wav";
import vocal2 from "./samples/vocal2.wav";
import melody2 from "./samples/Melody2.wav";

export default [
  {
    id: "808 Kick",
    keyPress: "Q",
    keyCode: 81,
    audio: kick808,
  },
  {
    id: "Kick",
    keyPress: "W",
    keyCode: 87,
    audio: kick,
  },
  {
    id: "Clap",
    keyPress: "E",
    keyCode: 69,
    audio: clap,
  },
  {
    id: "Snare",
    keyPress: "A",
    keyCode: 65,
    audio: snare,
  },
  {
    id: "Closed HiHat",
    keyPress: "S",
    keyCode: 83,
    audio: hiHat,
  },
  {
    id: "Open HiHat",
    keyPress: "D",
    keyCode: 68,
    audio: hiHat2,
  },
  {
    id: "Vocal 1",
    keyPress: "Z",
    keyCode: 90,
    audio: vocal1,
  },
  {
    id: "Vocal 2",
    keyPress: "X",
    keyCode: 88,
    audio: vocal2,
  },
  {
    id: "Melody",
    keyPress: "C",
    keyCode: 67,
    audio: melody2,
  },
];
