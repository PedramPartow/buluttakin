import { memo } from "react";
import { twMerge } from "tailwind-merge";

const MemoButton = ({
  onClick,
  disable = false,
  customClass,
  label,
  btnClass,
  type = "button",
}: GeneralButton) => {
  const classes: ButtonClasses = {
    primary: "bg-brand-700 text-white border border-brand-700",
    secoundry: "text-brand-700 border bg-brand-100",
    outlined: "text-brand-700 border border-brand-700",
  };

  return (
    <button
      type={type}
      className={twMerge(
        customClass,
        classes[btnClass],
        disable && "disabled-button",
        "rounded sm:rounded-lg p-3 flex-center h-11 font-bold text-base"
      )}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
};

const Button = memo(MemoButton);

export default Button;
