import { useState } from "react";
import Input from "./Input";
import TextContainer from "./TextContainer";
import type { Task } from "./types/types";

const Crud = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id: number) => {
    const newName = prompt("Edit task:");
    if (newName && newName.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, name: newName.trim() } : task
        )
      );
    }
  };

  return (
    <div className="w-[400px] mx-auto mt-20">
      <Input tasks={tasks} setTasks={setTasks} />
      <TextContainer
        tasks={tasks}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Crud;
