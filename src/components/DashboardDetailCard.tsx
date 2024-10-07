import { memo } from "react";

const MemoDashboardDetailCard = ({
  icon,
  value,
  description,
}: DashboardDetails) => {
  return (
    <div className="rounded-lg md:rounded-3xl bg-white shadow-dashboardCard p-4 grid gap-2">
      {icon}
      <span className="text-gray-900 text-lg sm:text-3xl font-bold">
        {value}
      </span>
      <span className="text-gray-600 text-sm font-bold">{description}</span>
    </div>
  );
};

const DashboardDetailCard = memo(MemoDashboardDetailCard);

export default DashboardDetailCard;
