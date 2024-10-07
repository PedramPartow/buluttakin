import React, { memo, useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,
  Chip,
  Box,
} from "@mui/material";
import CloseIcon from "../icons/close-icon";

const SearchInput = React.lazy(() => import("./SearchInput"));
const Button = React.lazy(() => import("../general/Button"));

const MemoMainSelect = ({
  label,
  background = "inherit",
  width = "100%",
  options,
  apply = false,
}: MainSelectProps) => {
  const [optionName, setOptionName] = useState<Array<string>>([]);
  const [applyMode, setApplyMode] = useState<Array<string>>([]);
  const [temp, setTemp] = useState<Array<string>>([]);
  const [searchField, setSearchField] = useState<string>("");

  const filteredOptions: Array<OptionDetail> = options.filter((option) =>
    option.label.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (event: SelectChangeEvent<Array<string>>) => {
    const value: Array<string> =
      typeof event?.target?.value !== "string"
        ? event?.target?.value
        : event?.target?.value.split(",");

    if (apply) {
      const lastValue = value[value.length - 1];
      if (applyMode.includes(lastValue)) {
        setTemp(value);
        setApplyMode(value);
      } else {
        if (lastValue !== undefined) {
          setTemp((prev) => [...prev, lastValue]);
        } else {
          clearOptionsList();
        }
      }
    } else {
      setOptionName(value);
    }
  };

  const handleDelete = (chip: string) => {
    const updateState = (prev: string[]) =>
      prev.filter((name) => name !== chip);
    apply ? setApplyMode(updateState) : setOptionName(updateState);
    setTemp(updateState);
  };

  const handleApply = () => {
    setApplyMode(temp);
  };

  const clearOptionsList = () => {
    setOptionName([]);
    setApplyMode([]);
    setTemp([]);
    setSearchField("");
  };

  return (
    <FormControl
      sx={{
        width: `${width}`,
        minWidth: "200px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: `${background}`,
          "& fieldset": {
            borderColor: "#79747e",
          },
          "&:hover fieldset": {
            borderColor: "#475467",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#475467",
            borderWidth: "1px",
            borderRadius: "4px",
          },
          "& .MuiSelect-icon": {
            color: "#101828",
          },
          "&.Mui-focused .MuiSelect-icon": {
            color: "#475467",
          },
        },
      }}
      className="custom-multi-select"
    >
      <InputLabel id="multiple-checkbox-label">
        <span className="text-gray-900 text-base font-normal">{label}</span>
      </InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        value={apply ? applyMode : optionName}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {selected.map((value, index) => {
              const option = options.find((option) => option.value === value);
              return (
                <Chip
                  sx={{
                    px: 1,
                    color: "#101828",
                    backgroundColor: "#F4EBFF",
                    fontSize: "16px",
                    lineHeight: "24PX",
                    fontWeight: "400",
                  }}
                  key={index}
                  label={option?.value}
                  avatar={
                    option?.img ? (
                      <img
                        src={option?.img}
                        alt="person"
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "100%",
                          margin: "0",
                        }}
                      />
                    ) : undefined
                  }
                  deleteIcon={
                    <CloseIcon width="18" height="18" fill="#101828" />
                  }
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  onClick={() => handleDelete(value)}
                  onDelete={() => handleDelete(value)}
                />
              );
            })}
          </Box>
        )}
        MenuProps={{
          sx: {
            "& .MuiMenu-list": {
              maxHeight: 320,
              overflowY: "auto",
              padding: "0 4px 0 0",
              margin: "8px 0",
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#667085",
                borderRadius: "100px",
              },
              "&::-webkit-scrollbar": {
                width: "4px",
              },
            },
          },
          PaperProps: {
            sx: {
              padding: "0 12px",
              borderWidth: 1,
              borderColor: "#475467",
              boxShadow: "none",
              marginTop: "4px",
            },
          },
        }}
      >
        <div className="w-full block">
          <SearchInput
            searchField={searchField}
            setSearchField={setSearchField}
          />
        </div>
        {filteredOptions.map((item, index) => (
          <MenuItem
            key={index}
            value={item.value}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#F9F5FF",
                borderRadius: "4px",
              },
              margin: "4px 0",
              padding: "8px 0",
            }}
          >
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "#6941C6",
                },
              }}
              checked={
                apply
                  ? temp.includes(item.value)
                  : optionName.includes(item.value)
              }
            />
            <ListItemText
              primary={
                <div className="flex items-center gap-3">
                  {item?.img && (
                    <div className="h-6 w-6">
                      <img
                        src={item?.img}
                        alt="person"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "100%",
                        }}
                      />
                    </div>
                  )}
                  <span>{item.label}</span>
                </div>
              }
            />
          </MenuItem>
        ))}
        {apply && (
          <div className="w-full flex-center mb-1">
            <Button
              label="Apply"
              btnClass="primary"
              onClick={handleApply}
              customClass="w-full xl:max-w-44 !rounded"
            />
          </div>
        )}
        <div className="w-full border-t border-t-gray-200 pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900 text-xs font-normal">
            <span>Selected:</span>
            <span>{apply ? applyMode.length : optionName.length}</span>
          </div>
          <button type="button" onClick={clearOptionsList}>
            <span className="text-blue-600 text-xs font-normal">
              Clear selected
            </span>
          </button>
        </div>
      </Select>
    </FormControl>
  );
};

const MainSelect = memo(MemoMainSelect);

export default MainSelect;
