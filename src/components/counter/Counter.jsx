import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterActions from "./CounterActions";

function Counter() {
  const globalState = useSelector((state) => state.counter.counter);

  return (
    <div className="container w-50 mx-auto  d-flex vh-100 justify-content-center align-items-center flex-column ">
      <div className="fs-1 fw-bold mb-5">{globalState}</div>
      <CounterActions />
    </div>
  );
}

export default Counter;
