import React, {useState} from "react";

function Counter() {
const [count, setCount] = useState(0);

const increaseCounter = () => {setCount(count + 1)};
const decreaseCounter = () => {setCount(count - 1)};
const resetCounter = () => {setCount(0)};

return (
    <>
    <h1>{count}</h1>
    <button onClick={decreaseCounter}>Decrease Count</button>
    <button onClick={increaseCounter}>Increment Count</button>
    <button onClick={resetCounter}>Reset Count</button>
    </>
  )
}

export default Counter;