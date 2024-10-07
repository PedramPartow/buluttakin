import { memo } from "react";
import CalendarIcon from "./icons/calendar-icon";
import NotificationBingIcon from "./icons/notification-bing-icon";
import MessageNotifIcon from "./icons/message-notif-icon";
import Person from "assets/images/Person.svg";
import ArrowDownIcon from "./icons/arrow-down-icon";

const MemoUserActionMenu = () => {
  return (
    <div className="w-full flex items-center max-md:justify-between sm:gap-8">
      <button type="button">
        <CalendarIcon width="28" height="28" />
      </button>
      <button type="button">
        <NotificationBingIcon width="28" height="28" />
      </button>
      <button type="button">
        <MessageNotifIcon width="28" height="28" />
      </button>
      <button type="button">
        <div className="w-10 h-10">
          <img src={Person} alt="Person Logo" className="w-full object-cover" />
        </div>
      </button>
      <button type="button">
        <ArrowDownIcon width="18" height="10" fill="#101828" />
      </button>
    </div>
  );
};

const UserActionMenu = memo(MemoUserActionMenu);

export default UserActionMenu;
