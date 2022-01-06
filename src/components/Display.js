export default function Display({ display }) {
  return (
    <div
      id="display"
      className="col-span-3  w-full text-center font-orbitron text-red-400 bg-gray-800 mb-6 rounded py-4 text-lg shadow-inner"
    >
      {display}
    </div>
  );
}
