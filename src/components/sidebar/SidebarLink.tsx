import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

const MemoSidebarLink = ({
  sidebarCollapse,
  title,
  icon,
  path,
  active,
  setSidebarCollapse,
}: LinkProps) => {
  const handleClick = () => {
    setSidebarCollapse(false);
  };

  return (
    <Link
      className={twMerge(
        "flex items-center gap-6 relative w-full",
        sidebarCollapse ? "pl-5" : "justify-center"
      )}
      to={path}
      onClick={handleClick}
    >
      {active && (
        <div className="w-1 h-6 bg-white absolute left-0 rounded-r-sm" />
      )}
      <div className="min-w-6 block">{icon}</div>
      {sidebarCollapse && (
        <span
          className={twMerge(
            "text-white font-medium",
            active && "underline underline-offset-6 decoration-4"
          )}
        >
          {title}
        </span>
      )}
    </Link>
  );
};

const SidebarLink = memo(MemoSidebarLink);

export default SidebarLink;
