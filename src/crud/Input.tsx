import { useState } from "react";
import type { Task } from "./types/types";

interface InputProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Input: React.FC<InputProps> = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      alert("Please enter something");
      return;
    }
    if (input.trim().length > 30) {
      alert("Input is too long (max 30 characters).");
      return;
    }
    setTasks([...tasks, { id: Date.now(), name: input.trim() }]);
    setInput("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-full flex items-center gap-2"
    >
      <input
        value={input}
        onChange={handleChange}
        type="text"
        className="px-2 py-1 border border-gray-400 rounded flex-1 text-sm outline-none"
        placeholder="Enter something..."
      />
      <button
        type="submit"
        className="px-2 py-1 bg-gray-400 rounded text-white cursor-pointer text-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default Input;
