import { memo } from "react";

const MemoMainRadioButtonGroup = ({
  radioGroup,
  title,
  icon,
  setValue,
}: radioGroupProps) => {
  const handleRadioClick = (id: number, value: string, detail: string) => {
    const radioButton = document.getElementById(
      id.toString()
    ) as HTMLInputElement;
    if (radioButton) {
      radioButton.checked = true;
      if (setValue) {
        const finalVal = `${value} - ${detail}`;
        setValue(finalVal);
      }
    }
  };

  return (
    <div className="w-full grid gap-4">
      <label className="text-gray-900 font-medium text-base after:content-['*'] after:text-error-500">
        {title}
      </label>
      {radioGroup.length &&
        radioGroup.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
            onClick={() => handleRadioClick(item.id, item.value, item.detail)}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-[50px] h-[50px] flex-center rounded-md"
                style={{
                  background:
                    "linear-gradient(90deg, #6941C6 12.85%, #8161CD 100%)",
                }}
              >
                {icon}
              </div>
              <label htmlFor={item.id.toString()}>
                <div className="grid">
                  <span className="font-semibold text-gray-900 text-sm">
                    {item.value}
                  </span>
                  <span className="text-gray-500 text-xs">{item.detail}</span>
                </div>
              </label>
            </div>
            <input
              className="hidden peer"
              type="radio"
              id={item.id.toString()}
              name="contact"
              value={item.value}
            />
            <span className="h-[22px] w-[22px] rounded-full bg-gray-200 flex-center peer-checked:bg-blue-500">
              <span className="h-3 w-3 rounded-full bg-gray-200" />
            </span>
          </div>
        ))}
    </div>
  );
};

const MainRadioButtonGroup = memo(MemoMainRadioButtonGroup);

export default MainRadioButtonGroup;
