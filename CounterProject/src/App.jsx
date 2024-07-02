import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(10);

  let checkZero = () => {
    console.log("checking if 0");
    return count === 0;
  };
  let checkTwenty = () => {
    console.log("checking if 20");
    return count === 20;
  };
  let incrementValue = () => {
    if (!checkTwenty()) {
      setCount(count + 1);
    }

    console.log(count);
  };
  let decrementValue = () => {
    if (!checkZero()) {
      setCount(count - 1);
    }
    console.log(count);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Score: {count}</h3>
      <button onClick={incrementValue}>Increment</button>
      <br />
      <button onClick={decrementValue}>Decrement</button>
    </>
  );
}

export default App;
