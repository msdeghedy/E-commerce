import { useState } from "react";
import CounterActions from "./CounterActions";

function Counter() {
  let [count, setCount] = useState(0);

  const increaseCount = () => setCount(++count);
  const decreaseCount = () => count > 0 && setCount(--count);

  return (
    <div className="container w-50 mx-auto  d-flex vh-100 justify-content-center align-items-center flex-column ">
      <div className="fs-1 fw-bold mb-5">{count}</div>
      <CounterActions increaseVal={increaseCount} decreaseVal={decreaseCount} />
    </div>
  );
}

export default Counter;
