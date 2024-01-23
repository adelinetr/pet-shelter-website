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
  value: string
}) {
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <div className=" mx-6">
      <Box>
        <FormControl className="w-90 md:w-60">
          <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={`${props.label}`}
            onChange={handleChange}
          >
            <MenuItem value={props.option}>{props.option}</MenuItem>
            <MenuItem value={props.option2}>{props.option2}</MenuItem>
            <MenuItem value={props.option3}>{props.option3}</MenuItem>
            <MenuItem value={props.option4}>{props.option4}</MenuItem>
            <MenuItem value={props.option5}>{props.option5}</MenuItem>
            <MenuItem value={props.option6}>{props.option6}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
