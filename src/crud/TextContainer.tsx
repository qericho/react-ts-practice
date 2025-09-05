import type { Task } from "./types/types";

interface TextContainerProps {
  tasks: Task[];
  onDelete?: (id: number) => void;
  onEdit?: (id: number, name: string) => void;
}

const TextContainer: React.FC<TextContainerProps> = ({
  tasks,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="w-full px-2 py-5 border-gray-400 border h-full mt-10 text-sm">
      <ul className="space-y-5">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="w-full flex justify-between items-center"
          >
            <p>{task.name}</p>
            <div className="flex gap-2">
              <button
                onClick={() => onDelete?.(task.id)}
                className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => onEdit?.(task.id, task.name)}
                className="px-2 py-1 bg-gray-400 text-white rounded cursor-pointer"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextContainer;
