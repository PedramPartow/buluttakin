import React, { memo } from "react";
import TargetIcon from "./icons/target-icon";

const MainRadioButtonGroup = React.lazy(
  () => import("./general/MainRadioButtonGroup")
);
const Button = React.lazy(() => import("./general/Button"));

const MemoMeetingCourseForm = ({
  setStep,
  setSelectedCourse,
  selectedCourse,
}: MeetingCourseProps) => {
  const radioGroupDetails: Array<radioGroup> = [
    {
      id: 1,
      value: "Financial",
      detail: "Ehsan Ebrahimi",
    },
    {
      id: 2,
      value: "Accounting",
      detail: "Sajjad Tahami",
    },
    {
      id: 3,
      value: "Accounting Tax",
      detail: "Mehrdad Moradpour",
    },
  ];

  const continueForm = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="sm:px-12 sm:py-4 sm:border-l border-dashed border-blue-500 gap-y-10 grid sm:gap-y-20">
      <MainRadioButtonGroup
        radioGroup={radioGroupDetails}
        title="Course"
        setValue={setSelectedCourse}
        icon={<TargetIcon width="30" height="27" />}
      />
      <div className="grid max-sm:gap-2 sm:flex items-center sm:justify-between">
        <Button
          label="Back"
          btnClass="outlined"
          onClick={() => setStep((prev) => prev - 1)}
          customClass="xs:max-sm:w-full"
        />
        <Button
          label="Continue"
          btnClass="primary"
          disable={!selectedCourse}
          onClick={continueForm}
          customClass="xs:max-sm:w-full"
        />
      </div>
    </div>
  );
};

const MeetingCourseForm = memo(MemoMeetingCourseForm);

export default MeetingCourseForm;
