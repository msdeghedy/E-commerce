function CounterActions({ increaseVal, decreaseVal }) {
  return (
    <div>
      <button onClick={increaseVal} className="btn btn-success me-5">
        +
      </button>
      <button onClick={decreaseVal} className="btn btn-danger">
        -
      </button>
    </div>
  );
}

export default CounterActions;
