import React, { memo } from "react";
import { twMerge } from "tailwind-merge";

const RevenueChart = React.lazy(() => import("./RevenueChart"));

const MemoDashboardRevenueCard = () => {
  const revenueCards: Array<revenueCardType> = [
    {
      title: "New Clients",
      value: "54",
      percent: "+18.7%",
    },
    {
      title: "invoice overdue",
      value: "6",
      percent: "-2.7%",
    },
  ];

  const classStatus = (percent: string) => {
    return percent.includes("+")
      ? "bg-success-100 text-success-700"
      : "bg-error-100 text-error-500";
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 items-center max-xl:gap-y-6 xl:gap-x-6">
      <div className="grid lg:grid-cols-2 xl:grid-cols-1 gap-6 w-full col-span-1">
        {revenueCards.length &&
          revenueCards.map((item, index) => (
            <div
              key={index}
              className="xs:p-4 sm:p-6 rounded-lg md:rounded-3xl bg-white shadow-dashboardCard flex items-center justify-between w-full"
            >
              <div className="grid gap-6">
                <h3 className="font-bold text-md sm:text-lg text-gray-900 whitespace-nowrap">
                  {item.title}
                </h3>
                <span className="font-bold text-lg sm:text-4xl leading-10 text-gray-900">
                  {item.value}
                </span>
              </div>
              <div
                className={twMerge(
                  "py-1 px-2 rounded-full flex-center",
                  classStatus(item.percent)
                )}
              >
                <span className="text-lg font-bold">{item.percent}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="rounded-lg md:rounded-3xl bg-white shadow-dashboardCard col-span-2">
        <RevenueChart />
      </div>
    </div>
  );
};

const DashboardRevenueCard = memo(MemoDashboardRevenueCard);

export default DashboardRevenueCard;
