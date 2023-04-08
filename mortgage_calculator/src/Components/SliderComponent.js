import { Slider, Stack, Typography } from "@mui/material";
import React from "react";

const SliderComponent = (props) => {
  const {
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps,
  } = props;

  return (
    <div>
      <Stack my={1.4} gap={1} direction="row" justifyContent={"space-between"}>
        <Typography variant="subtitle2"> {label}</Typography>
        <Typography variant="h5">
          {" "}
          {unit}
          {amount}
        </Typography>
        <Slider
          min={min}
          max={max}
          defaultValue={defaultValue}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={onChange}
          value={value}
          marks
          step={steps}
        ></Slider>
      </Stack>
    </div>
  );
};

export default SliderComponent;
