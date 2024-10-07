import { memo } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CircleCloseIcon from "../icons/Circle-close-icon";

const MemoTextInput = ({ label, setValue, value }: TextInputProps) => {
  const handleClear = () => {
    setValue("");
  };

  return (
    <TextField
      label={label}
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: value && (
            <InputAdornment position="end">
              <button type="button" onClick={handleClear}>
                <CircleCloseIcon width="20" height="20" fill="#101828" />
              </button>
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiInputLabel-root": {
          color: "#101828",
        },
        "& .MuiInputLabel-root.MuiInputLabel-shrink": {
          backgroundColor: "#f2f4f7",
          padding: "0 4px",
          color: "#475467",
        },
        "& input": {
          color: "#344054",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
        },
        "& fieldset": {
          borderColor: "#667085 !important",
          borderWidth: "1px !important",
        },
      }}
    />
  );
};

const TextInput = memo(MemoTextInput);

export default TextInput;
