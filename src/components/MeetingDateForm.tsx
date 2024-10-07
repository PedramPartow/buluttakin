import React, { memo, useState } from "react";
import MessagesIcon from "./icons/messages-icon";

const MainInput = React.lazy(() => import("./general/MainInput"));
const Button = React.lazy(() => import("./general/Button"));
const MainRadioButtonGroup = React.lazy(
  () => import("./general/MainRadioButtonGroup")
);

const MemoMeetingDateForm = ({
  setStep,
  setSelectedDate,
  selectedDate,
  setEmail,
  email,
}: MeetingDateProps) => {
  const [error, setError] = useState<string>("");
  const radioGroupDetails: Array<radioGroup> = [
    {
      id: 4,
      value: "1402/12/07 - 08:00",
      detail: "Sunday",
    },
    {
      id: 5,
      value: "1402/12/07 - 09:00",
      detail: "Monday",
    },
    {
      id: 6,
      value: "1402/12/07 - 10:00",
      detail: "Tuesday",
    },
  ];

  const handleInputChange = (val: string) => {
    setEmail(val);
  };

  const handleInputValidation = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val.trim()) {
      if (emailRegex.test(val)) {
        setError("");
      } else {
        setError("Email format not valid");
      }
    } else {
      setError("");
    }
  };

  const continueForm = () => {
    setStep((prev: number) => prev + 1);
  };

  return (
    <div className="sm:px-12 py-4 sm:border-l border-dashed border-blue-500 grid gap-y-10 sm:gap-y-2">
      <div className="w-full grid gap-6">
        <MainInput
          label="Email"
          value={email}
          onValidation={handleInputValidation}
          onChange={handleInputChange}
          errorTxt={error}
        />
        <MainRadioButtonGroup
          radioGroup={radioGroupDetails}
          title="Date"
          setValue={setSelectedDate}
          icon={<MessagesIcon />}
        />
      </div>
      <div className="flex items-center justify-end">
        <Button
          disable={!(email && selectedDate && !error)}
          onClick={continueForm}
          btnClass="primary"
          label="Continue"
          customClass="xs:max-sm:w-full"
        />
      </div>
    </div>
  );
};

const MeetingDateForm = memo(MemoMeetingDateForm);

export default MeetingDateForm;
