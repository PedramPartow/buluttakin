import React, { memo } from "react";
import Person from "assets/images/Person.svg";
import { toast } from "react-toastify";
import TickCircleIcon from "./icons/tick-circle-icon";

const Button = React.lazy(() => import("./general/Button"));

const MemoMeetingPreviewForm = ({
  setStep,
  onClose,
  setMeetings,
  email,
  date,
  course,
}: MeetingFormProps) => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newObj = {
      src: Person,
      name: course.split(" - ")[1],
      subject: course.split(" - ")[0],
      date: date,
    };
    setMeetings((prevMeetings) => [...prevMeetings, newObj]);
    onClose();
    toast.success("Meeting Successfully Created", {
      icon: <TickCircleIcon width="22" height="22" fill="#265035" />,
    });
  };

  return (
    <form
      className="sm:px-12 sm:py-4 sm:border-l border-dashed border-blue-500 grid gap-y-10 grid sm:gap-y-40"
      onSubmit={submitForm}
    >
      <div className="grid gap-4 sm:gap-8">
        <div className="flex items-center gap-1">
          <span className="text-gray-500 font-semibold text-base">Email :</span>
          <span className="text-gray-900 font-semibold text-base">{email}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500 font-semibold text-base">Date :</span>
          <span className="text-gray-900 font-semibold text-base">{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500 font-semibold text-base">
            Course :
          </span>
          <span className="text-gray-900 font-semibold text-base">
            {course}
          </span>
        </div>
      </div>
      <div className="grid max-sm:gap-2 sm:flex items-center sm:justify-between">
        <Button
          label="Back"
          btnClass="outlined"
          onClick={() => setStep((prev) => prev - 1)}
        />
        <Button type="submit" label="Complete" btnClass="primary" />
      </div>
    </form>
  );
};

const MeetingPreviewForm = memo(MemoMeetingPreviewForm);

export default MeetingPreviewForm;
