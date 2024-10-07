import React, { memo } from "react";
import WalletIcon from "components/icons/wallet-icon";
import ChartIcon from "components/icons/chart-icon";
import EmptyWalletIcon from "components/icons/empty-wallet-icon";
import CardReceiveIcon from "components/icons/card-receive-icon";

const DashboardDetailCard = React.lazy(
  () => import("components/DashboardDetailCard")
);
const DashboardRevenueCard = React.lazy(
  () => import("components/DashboardRevenueCard")
);
const DashboardMeeting = React.lazy(
  () => import("components/DashboardMeeting")
);
const UserActionMenu = React.lazy(() => import("components/UserActionMenu"));
const FormationStatus = React.lazy(() => import("components/FormationStatus"));
const TodoList = React.lazy(() => import("components/TodoList"));
const MainSelect = React.lazy(() => import("components/general/MainSelect"));

const MemoDashboard = () => {
  const options: Array<OptionDetail> = [
    { label: "Menu item 1", value: "Menu item 1" },
    { label: "Menu item 2", value: "Menu item 2" },
    { label: "Menu item 3", value: "Menu item 3" },
    { label: "Menu item 4", value: "Menu item 4" },
    { label: "Menu item 5", value: "Menu item 5" },
    { label: "Menu item 6", value: "Menu item 6" },
  ];

  const cardDetailsArray: Array<DashboardDetails> = [
    {
      icon: <WalletIcon />,
      value: "$143.223",
      description: "Your bank balance",
    },
    {
      icon: <ChartIcon />,
      value: "$43.110",
      description: "Your Tax",
    },
    {
      icon: <EmptyWalletIcon />,
      value: "24",
      description: "Employees working today",
    },
    {
      icon: <CardReceiveIcon />,
      value: "$3.287",
      description: "This week`s card spending",
    },
  ];

  return (
    <div className="grid md:flex items-start max-xl:gap-5 gap-10 max-xl:px-4">
      <h1 className="sr-only">Dashboard</h1>
      <div className="w-full grid grid-cols-1 gap-10">
        <div className="max-lg:w-full lg:w-fit block">
          <MainSelect
            label="Recent emails"
            background="white"
            options={options}
            apply={true}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="grid max-lg:grid-cols-1 lg:max-xl:grid-cols-2 xl:grid-cols-4 gap-6">
              {cardDetailsArray.length &&
                cardDetailsArray.map((item, index) => (
                  <DashboardDetailCard
                    key={index}
                    icon={item.icon}
                    value={item.value}
                    description={item.description}
                  />
                ))}
            </div>
            <DashboardRevenueCard />
          </div>
          <DashboardMeeting />
        </div>
      </div>
      <div className="shadow-dashboardForm bg-white py-6 px-4 rounded-lg md:rounded-4xl md:max-w-[300px] grid gap-y-4">
        <UserActionMenu />
        <FormationStatus />
        <TodoList />
      </div>
    </div>
  );
};

const Dashboard = memo(MemoDashboard);

export default Dashboard;
