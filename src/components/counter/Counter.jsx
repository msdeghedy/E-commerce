import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterActions from "./CounterActions";
import "./Counter.css";

function Counter() {
  const globalState = useSelector((state) => state.counter.counter);

  return (
    <div className="container w-50 mx-auto  d-flex empty-cart-height justify-content-center align-items-center flex-column ">
      <div className=" fw-bold mb-5 value">{globalState}</div>
      <CounterActions />
    </div>
  );
}

export default Counter;
