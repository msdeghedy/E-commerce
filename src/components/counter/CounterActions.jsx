function CounterActions({ increaseVal, decreaseVal }) {
  return (
    <div>
      <button onClick={increaseVal} className="btn btn-success btn-lg me-5">
        +
      </button>
      <button onClick={decreaseVal} className="btn btn-danger btn-lg">
        -
      </button>
    </div>
  );
}

export default CounterActions;
