import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { useState } from "react";

export default function Selector(props: {
  label: string;
  option: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6?: string;
  name: string;
  value: string;
  onSelect?: (selected: string) => void;
}) {
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <div className="flex space-x-6 mx-6 md:hidden">
      <Box>
        <FormControl className="w-90 md:w-90">
          <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={`${props.label}`}
            onChange={(event) => {
              handleChange(event);
              props.onSelect && props.onSelect(event.target.value as string);
            }}
          >
            <MenuItem value={props.option}>{props.option}</MenuItem>
            <MenuItem value={props.option2}>{props.option2}</MenuItem>
            <MenuItem value={props.option3}>{props.option3}</MenuItem>
            <MenuItem value={props.option4}>{props.option4}</MenuItem>
            <MenuItem value={props.option5}>{props.option5}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
