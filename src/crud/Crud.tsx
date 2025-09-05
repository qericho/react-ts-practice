import { useEffect, useState } from "react";
import Input from "./Input";
import TextContainer from "./TextContainer";
import type { Task } from "./types/types";

const Crud = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const onDelete = (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const onEdit = (id: number, name: string) => {
    const newName = prompt("Enter new name", name);
    if (!newName) return;
    if (newName.trim().length > 30) {
      alert("Name is too long (max 30 characters).");
      return;
    }
    if (newName) {
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
      <TextContainer onDelete={onDelete} onEdit={onEdit} tasks={tasks} />
    </div>
  );
};

export default Crud;
