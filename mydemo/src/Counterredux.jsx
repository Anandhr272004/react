// Counter.js
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './app/Slice';

const Counter = () => {
  // Get the current count from the Redux store
  const count = useSelector((state) => state.counter.value);
  
  // Get the dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
