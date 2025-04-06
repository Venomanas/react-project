import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg rounded-2xl px-6 py-6 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-6">
          Password Generator
        </h1>

        <div className="flex items-center mb-6">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="flex-grow px-4 py-2 rounded-l-md bg-slate-100 text-gray-800 focus:outline-none text-sm"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm transition duration-300"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-white text-sm">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="whitespace-nowrap">
              Length: {length}
            </label>
            <input
              type="range"
              id="length"
              min={6}
              max={50}
              value={length}
              onChange={e => setLength(e.target.value)}
              className="w-3/4 accent-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberAllowed">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-blue-500 w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="charAllowed">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-blue-500 w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
