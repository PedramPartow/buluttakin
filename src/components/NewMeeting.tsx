import React, { memo, useState } from "react";

const MeetingSteps = React.lazy(() => import("./MeetingSteps"));
const MeetingDateForm = React.lazy(() => import("./MeetingDateForm"));
const MeetingCourseForm = React.lazy(() => import("./MeetingCourseForm"));
const MeetingPreviewForm = React.lazy(() => import("./MeetingPreviewForm"));

const MemoNewMeeting = ({ onClose, setMeetings }: NewMeetingProps) => {
  const [step, setStep] = useState<number>(1);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="grid max-sm:gap-y-6 grid-cols-1 sm:grid-cols-3">
      <div className="sm:col-span-1 sm:flex items-center justify-center">
        <MeetingSteps step={step.toString()} />
      </div>
      <div className="sm:col-span-2">
        <div className={`${step === 1 ? "block" : "hidden"}`}>
          <MeetingDateForm
            setStep={setStep}
            setEmail={setEmail}
            email={email}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </div>
        <div className={`${step === 2 ? "block" : "hidden"}`}>
          <MeetingCourseForm
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            setStep={setStep}
          />
        </div>
        <div className={`${step === 3 ? "block" : "hidden"}`}>
          <MeetingPreviewForm
            setStep={setStep}
            onClose={onClose}
            setMeetings={setMeetings}
            course={selectedCourse}
            date={selectedDate}
            email={email}
          />
        </div>
      </div>
    </div>
  );
};

const NewMeeting = memo(MemoNewMeeting);

export default NewMeeting;
