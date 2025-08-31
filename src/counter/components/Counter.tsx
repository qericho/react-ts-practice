import { useState } from "react";

const Counter = ({ initial = 0 }: { initial?: number }) => {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initial);

  return (
    <div className="w-100 h-full mx-auto mt-10 border space-y-1 px-5 py-3">
      <div className="flex gap-x-5 items-center justify-center py-5 px-10 mt-10">
        <button
          className="cursor-pointer border px-10 py-5"
          onClick={increment}
        >
          add
        </button>
        <p className="text-2xl">{count}</p>
        <button
          className="cursor-pointer border px-10 py-5"
          onClick={decrement}
        >
          min
        </button>
      </div>
      <button
        className="cursor-pointer w-full border px-10 py-3"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
