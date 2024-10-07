import React, { memo, useState } from "react";
import { toast } from "react-toastify";
import TickCircleIcon from "./icons/tick-circle-icon";
import Person from "assets/images/Person.svg";
import ReceiptIcon from "./icons/receipt-icon";

const MainSelect = React.lazy(() => import("./general/MainSelect"));
const TextInput = React.lazy(() => import("./general/TextInput"));
const Button = React.lazy(() => import("./general/Button"));

const MemoNewTodoForm = ({ onClose, setTodos }: NewTodoProps) => {
  const [title, setTitle] = useState<string>("");

  const options: Array<OptionDetail> = [
    { label: "Matin abbasi/0234", value: "matin abbasi", img: Person },
    { label: "Matin ghadri/0874", value: "matin ghadri", img: Person },
    { label: "Matin kazemi/0987", value: "matin kazemi", img: Person },
    { label: "Matin hasani/0877", value: "matin hasani", img: Person },
    { label: "Matin mohammadi/0845", value: "matin mohammadi", img: Person },
    { label: "Matin alipour/0457", value: "matin alipour", img: Person },
  ];

  const onAccept = () => {
    const newObj: TodosDetail = {
      icon: <ReceiptIcon fill="#101828" />,
      title: title,
      description: "Tomarrow",
    };
    setTodos((prev) => [...prev, newObj]);
    toast.success("Todo Successfully Added", {
      icon: <TickCircleIcon width="22" height="22" fill="#265035" />,
    });
    onClose();
  };

  return (
    <div className="px-2 flex flex-col gap-8 justify-between h-full">
      <div className="grid gap-8">
        <div className="flex-center">
          <span className="text-brand-700 font-semibold text-2xl">
            Add to do
          </span>
        </div>
        <div className="w-full grid gap-6">
          <TextInput label="write a title" setValue={setTitle} value={title} />
          <MainSelect label="add person" options={options} />
        </div>
      </div>
      <div className="grid max-sm:gap-2 w-full sm:flex items-center sm:justify-end sm:gap-x-4">
        <Button
          label="Cancel"
          onClick={onClose}
          btnClass="secoundry"
          customClass="xs:max-sm:w-full"
        />
        <Button
          label="Accept"
          disable={!title}
          btnClass="primary"
          onClick={onAccept}
          customClass="xs:max-sm:w-full"
        />
      </div>
    </div>
  );
};

const NewTodoForm = memo(MemoNewTodoForm);

export default NewTodoForm;
