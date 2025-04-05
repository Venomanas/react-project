import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(newColor) {
    setColor(newColor);
  }

  return (
    <>
      <h1 className="bg-amber-50 text-3xl text-black font-bold text-center py-4">
        BG Changer App with Vite
      </h1>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl transition-colors duration-500">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-red-500"
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-green-500"
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-blue-500"
            >
              blue
            </button>
            <button
              onClick={() => changeColor("yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-yellow-500"
            >
              yellow
            </button>
            <button
              onClick={() => changeColor("gray")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-gray-500"
            >
              gray
            </button>
            <button
              onClick={() => changeColor("orange")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-orange-500"
            >
              orange
            </button>
            <button
              onClick={() => changeColor("cyan")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-cyan-500"
            >
              cyan
            </button>
            <button
              onClick={() => changeColor("pink")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-pink-500"
            >
              pink
            </button>
            <button
              onClick={() => changeColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-purple-500"
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
