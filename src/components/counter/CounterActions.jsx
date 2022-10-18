import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../../redux/counterSlice";

function CounterActions({ increaseVal, decreaseVal }) {
  const dispatch = useDispatch();

  const increaseCount = () => dispatch(incrementCount());
  const decreaseCount = () => dispatch(decrementCount());
  return (
    <div>
      <button onClick={increaseCount} className="btn btn-success btn-lg me-5">
        +
      </button>
      <button onClick={decreaseCount} className="btn btn-danger btn-lg">
        -
      </button>
    </div>
  );
}

export default CounterActions;
