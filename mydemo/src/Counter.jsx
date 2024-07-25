import React from 'react';
import CounterPage from './CounterPage';

const Counter = () => {
  const { count, increment } = CounterPage();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;