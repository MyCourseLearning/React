import { useEffect, useState } from "react";

export function MyComponent({ name = "John", age = 30 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(`Hello ${name}, you are ${age} years old!`);
  }, [count]);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
