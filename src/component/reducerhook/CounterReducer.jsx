import React, { useReducer } from "react";

const CounterReducer = () => {
  const initialstate = 0; //you can take initial value anything
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return initialstate;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [countsecond, dispatchsecond] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>Hello useReduer!</h1>
      <div style={{ backgroundColor: "grey", color: "white" }}>
        <h3>CurrentCount: {count}</h3>
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
      <div style={{ backgroundColor: "blue", color: "white" }}>
        <h3>CurrentCount: {countsecond}</h3>
        <button onClick={() => dispatchsecond("Increment")}>Increment</button>
        <button onClick={() => dispatchsecond("Decrement")}>Decrement</button>
        <button onClick={() => dispatchsecond("Reset")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterReducer;
