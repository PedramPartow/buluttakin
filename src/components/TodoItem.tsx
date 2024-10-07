import { memo } from "react";

const MemoTodoItem = ({ icon, title, description }: TodosDetail) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-10 h-10 flex-center bg-brand-50 rounded-2xl">
        {icon}
      </div>
      <div className="grid gap-2">
        <span className="text-gray-900 font-bold text-base">{title}</span>
        <span className="text-gray-400 font-bold text-xs">{description}</span>
      </div>
    </div>
  );
};

const TodoItem = memo(MemoTodoItem);

export default TodoItem;
