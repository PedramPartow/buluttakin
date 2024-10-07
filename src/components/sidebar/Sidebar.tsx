import React, { useMemo, memo, useState } from "react";
import { useLocation } from "react-router-dom";
import HomeHashtagIcon from "../icons/home-hashtag-icon";
import ChartSquareIcon from "../icons/chart-square-icon";
import BankIcon from "../icons/bank-icon";
import SmsIcon from "../icons/sms-icon";
import PeopleIcon from "../icons/people-icon";
import DocumentIcon from "../icons/document-icon";
import MoneySendIcon from "../icons/money-send-icon";
import { twMerge } from "tailwind-merge";
import brand from "assets/images/Money.svg";
import SettingIcon from "../icons/setting-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const SidebarLink = React.lazy(() => import("./SidebarLink"));

const MemoSidebar = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);
  const location = useLocation();
  const sidebarRoutes: Array<SidebarRoute> = useMemo(
    () => [
      {
        title: "Dashboard",
        icon: <HomeHashtagIcon />,
        path: "/dashboard",
      },
      {
        title: "Report",
        icon: <ChartSquareIcon />,
        path: "/report",
      },
      {
        title: "Bank",
        icon: <BankIcon />,
        path: "/bank",
      },
      {
        title: "Email",
        icon: <SmsIcon />,
        path: "/email",
      },
      {
        title: "Group",
        icon: <PeopleIcon />,
        path: "/group",
      },
      {
        title: "List",
        icon: <DocumentIcon />,
        path: "/list",
      },
      {
        title: "Finance",
        icon: <MoneySendIcon />,
        path: "/finance",
      },
    ],
    []
  );

  const collapseSidebar = () => {
    setSidebarCollapse((perv) => !perv);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={twMerge(
        "bg-brand-700 h-full py-8 flex flex-col justify-between relative transition-all duration-300",
        sidebarCollapse ? "w-[200px]" : "w-[90px]"
      )}
    >
      <div className="block w-full overflow-y-auto overflow-x-hidden custom-sidebar-scroll">
        <button
          type="button"
          onClick={collapseSidebar}
          className="rounded-full bg-white flex-center w-8 h-8 absolute -right-4 top-24 text-brand-700 shadow-sidebar"
        >
          <div className={twMerge(!sidebarCollapse && "rotate-180")}>
            <ArrowRightIcon width="8" height="12" />
          </div>
        </button>
        <div className="w-full flex justify-center items-center mx-auto mb-22">
          <img src={brand} alt="Brand Logo" className="w-12 h-7" />
        </div>
        <div className="grid grid-cols-1 gap-y-10">
          {sidebarRoutes.length &&
            sidebarRoutes.map((route, index) => (
              <SidebarLink
                key={index}
                sidebarCollapse={sidebarCollapse}
                title={route.title}
                icon={route.icon}
                path={route.path}
                active={isActive(route.path)}
                setSidebarCollapse={setSidebarCollapse}
              />
            ))}
        </div>
      </div>
      <div className="pt-8">
        <SidebarLink
          sidebarCollapse={sidebarCollapse}
          title="Setting"
          icon={<SettingIcon />}
          path="/setting"
          active={isActive("/setting")}
          setSidebarCollapse={setSidebarCollapse}
        />
      </div>
    </div>
  );
};

const Sidebar = memo(MemoSidebar);

export default Sidebar;
