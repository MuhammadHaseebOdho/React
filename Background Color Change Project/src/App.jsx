import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [color, setColor] = useState("#1A2130");
  return (
    <div
      className=" w-full  h-screen  duration-200  "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button
            onClick={() => setColor("#06D001")}
            className=" outline-none px-5 py-1 rounded-lg"
            style={{ backgroundColor: "#06D001" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#45474B")}
            className="outline-none px-5 py-1 rounded-lg"
            style={{ backgroundColor: "#45474B" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("#304463")}
            className=" outline-none px-5 py-1 rounded-lg"
            style={{ backgroundColor: "#304463" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#DCA47C")}
            className=" outline-none px-5 py-1 rounded-lg"
            style={{ backgroundColor: "#DCA47C " }}
          >
            Cream
          </button>
          <button
            onClick={() => setColor("#4A249D")}
            className=" outline-none px-5 py-1 rounded-lg"
            style={{ backgroundColor: "#4A249D" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
