import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../../redux/counterSlice";

function CounterActions({ increaseVal, decreaseVal }) {
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(incrementCount());
  const decreaseCount = () => dispatch(decrementCount());
  return (
    <div>
      <button
        onClick={increaseCount}
        className="btn btn-light btn-lg me-5 fs-1"
      >
        Increment +
      </button>
      <button onClick={decreaseCount} className="btn btn-dark btn-lg fs-1">
        Decrement -
      </button>
    </div>
  );
}

export default CounterActions;
