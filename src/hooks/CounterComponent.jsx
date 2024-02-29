import useCounter from "./useCounter";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(1, 0, 10);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterComponent;
