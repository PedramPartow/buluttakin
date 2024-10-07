import { memo, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const MemoMainInput = ({
  label,
  errorTxt,
  value,
  onChange,
  onValidation,
  placeholder = "",
  type = "text",
  className = "",
}: InputProps) => {
  const [timeoutVal, setTimeoutVal] = useState<NodeJS.Timeout | null>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (timeoutVal) {
      clearTimeout(timeoutVal);
    }
    const check = setTimeout(() => {
      onValidation(newValue);
    }, 700);
    setTimeoutVal(check);
  };

  useEffect(() => {
    return () => {
      if (timeoutVal) {
        clearTimeout(timeoutVal);
      }
    };
  }, [timeoutVal]);

  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <label className="text-gray-900 font-medium text-base after:content-['*'] after:text-error-500">
          {label}
        </label>
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyUp={(e) => handleKeyUp(e)}
        placeholder={placeholder}
        className={twMerge(
          "p-2 bg-gray-100 focus:bg-white rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none text-sm",
          className
        )}
      />
      {errorTxt && <span className="text-error-500 text-xs">{errorTxt}</span>}
    </div>
  );
};

const MainInput = memo(MemoMainInput);

export default MainInput;
