import { useState } from "react";

const useCounter = (initialValue = 0, min, max) => {
  if (initialValue < min || initialValue > max) initialValue = min;

  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < max) setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    if (count > min) setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
