import { memo } from "react";

const MemoDashboardMeetingCard = ({
  src,
  name,
  subject,
  date,
}: MeetingDetails) => {
  return (
    <div className="bg-white rounded-lg py-2 px-4 grid grid-cols-1 sm:grid-cols-6 gap-1">
      <div className="w-10 h-10 sm:col-span-1">
        <img src={src} alt="Person Logo" className="w-full object-cover" />
      </div>
      <div className="flex items-center sm:col-span-1">
        <span className="text-gary-900 text-base block truncate">{name}</span>
      </div>
      <div className="flex items-center sm:col-span-2">
        <span className="text-gary-900 text-base block truncate">
          {subject}
        </span>
      </div>
      <div className="flex items-center sm:col-span-2">
        <span className="text-gary-900 text-base block truncate">{date}</span>
      </div>
    </div>
  );
};

const DashboardMeetingCard = memo(MemoDashboardMeetingCard);

export default DashboardMeetingCard;
