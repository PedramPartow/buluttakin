import { memo } from "react";
import { twMerge } from "tailwind-merge";

const MemoMeetingSteps = ({ step }: StepProps) => {
  const stepList: Array<MeetingStepsDetail> = [
    {
      level: "1",
      title: "Email",
      detail: "Set Date",
    },
    {
      level: "2",
      title: "Course",
      detail: "Select Course",
    },
    {
      level: "3",
      title: "Preview",
      detail: "Preview Detail",
    },
  ];

  return (
    <div className="relative block">
      {stepList.length &&
        stepList.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "flex items-center gap-5",
              index !== 0 && "mt-11"
            )}
          >
            <div
              className={twMerge(
                "w-10 h-10  rounded-lg flex-center z-10",
                step === item.level
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-blue-500"
              )}
            >
              <span className="font-semibold text-lg">{item.level}</span>
            </div>
            <div className="grid max-h-10">
              <span
                className={twMerge(
                  "text-base font-semibold",
                  step === item.level ? "text-gray-900" : "text-gray-500"
                )}
              >
                {item.title}
              </span>
              <span className="text-sm text-gray-500">{item.detail}</span>
            </div>
          </div>
        ))}
      <div className="min-h-full border border-dashed border-blue-500 absolute top-0 left-5" />
    </div>
  );
};

const MeetingSteps = memo(MemoMeetingSteps);

export default MeetingSteps;
