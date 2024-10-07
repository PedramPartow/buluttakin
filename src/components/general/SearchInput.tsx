import { memo } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "../icons/search-icon";

const MemoSearchInput = ({ searchField, setSearchField }: SearchInputProps) => {
  return (
    <TextField
      fullWidth
      onClick={(event) => {
        event.stopPropagation();
      }}
      value={searchField}
      onChange={(e) => setSearchField(e.target.value)}
      maxRows={1}
      variant="outlined"
      placeholder="Search"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon width="24" height="24" fill="#344054" />
            </InputAdornment>
          ),
        },
      }}
      sx={{
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

const SearchInput = memo(MemoSearchInput);

export default SearchInput;
