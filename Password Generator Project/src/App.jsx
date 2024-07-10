import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  
  const [passLength, setPassLength] = useState(8);
  const [isNumber, setNumbers] = useState(false);
  const [isCharacters, setCharacters] = useState(false);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "123456789";
    if (isCharacters) str += "./?-()*&%$#@!^=~+";

    for (let i = 1; i <= passLength; i++) {
      let j = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(j);
    }
    setPassword(pass);
  }, [passLength, isNumber, isCharacters,setPassword]);


  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);


  useEffect(() => {
    passwordGenerator();
  }, [passLength, isNumber, isCharacters, setPassword]);



  return (
    <div className="bg-slate-400 w-full max-w-md min-h-44  mx-auto rounded-lg  px-4 my-8">
      <div className=" ">
        <h1 className="font-semibold text-xl  text-center">
          Password Generator
        </h1>
      </div>

      <div className="flex  overflow-hidden rounded-lg mt-2 ">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="Password"
          readOnly
        />
        <button
          onClick={copyPass}
          className="outline-none bg-lime-500 text-white px-3 py-0.5 shrink-0 font-medium"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 mt-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={passLength}
            ref={passwordRef}
            className="cursor-pointer"
            onChange={(e) => setPassLength(e.target.value)}
          />
          <label className="text-slate-900 font-medium">
            Length: {passLength}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumber}
            id="numberInput"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isCharacters}
            id="characterInput"
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
