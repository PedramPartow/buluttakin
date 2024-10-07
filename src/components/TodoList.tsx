import React, { memo, useState } from "react";
import ReceiptIcon from "./icons/receipt-icon";
import ClockIcon from "./icons/clock-icon";
import ClipboardIcon from "./icons/clipboard-icon";
import ClipboardTickIcon from "./icons/clipboard-tick-icon";
import AddSquareIcon from "./icons/add-square-icon";

const TodoItem = React.lazy(() => import("./TodoItem"));
const Modal = React.lazy(() => import("./general/Modal"));
const NewTodoForm = React.lazy(() => import("./NewTodoForm"));

const MemoTodoList = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [todos, setTodos] = useState<Array<TodosDetail>>([
    {
      icon: <ReceiptIcon fill="#101828" />,
      title: "Run payroll",
      description: "Mar 4 at 6:00 pm",
    },
    {
      icon: <ClockIcon fill="#101828" />,
      title: "Review time off request",
      description: "Mar 7 at 8:00 pm",
    },
    {
      icon: <ClipboardIcon fill="#101828" />,
      title: "Sign board resoluation",
      description: "Mar 12 at 8:30 pm",
    },
    {
      icon: <ClipboardTickIcon fill="#101828" />,
      title: "Finish onboarding Tony",
      description: "Mar 12 at 9:30 pm",
    },
  ]);

  const changeModalStatus = () => {
    setModalStatus((prev) => !prev);
  };

  return (
    <div className="w-full grid gap-y-8">
      <div className="w-full grid gap-y-6">
        <h2 className="text-gray-900 font-bold text-lg sm:text-2xl">
          Your to-Do list
        </h2>
        {todos.length &&
          todos.map((todo, index) => <TodoItem key={index} {...todo} />)}
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            onClick={changeModalStatus}
            className="w-10 h-10 flex-center bg-brand-200 rounded-2xl"
          >
            <AddSquareIcon fill="#101828" />
          </button>
          <span className="text-gray-900 font-bold text-base">Add to Do</span>
        </div>
      </div>
      <div className="w-full grid gap-y-3">
        <span className="font-bold text-gray-900 text-base">Board meeting</span>
        <span className="font-bold text-gray-400 text-sm">
          Feb 22 at 6:00 PM
        </span>
        <span className="font-bold text-gray-400 text-xs">
          You have been invited to attend a meeting of the Boeard Diretors.
        </span>
      </div>
      {modalStatus && (
        <Modal
          isOpen={modalStatus}
          onClose={changeModalStatus}
          customClass="h-full max-h-[90%]"
        >
          <NewTodoForm onClose={changeModalStatus} setTodos={setTodos} />
        </Modal>
      )}
    </div>
  );
};

const TodoList = memo(MemoTodoList);

export default TodoList;
