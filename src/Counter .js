import React, { useState } from 'react';

const Counter = ({ onCounterUpdate }) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
    onCounterUpdate(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
    onCounterUpdate(newCount);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h3>History</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
