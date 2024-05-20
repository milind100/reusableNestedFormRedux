import { FormLabel, Grid, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const CustomInput = ({
  type,
  name,
  label,
  value,
  onChange,
  error,
  sx,
  xs,
  md,
  lg,
  ...props
}) => {
  switch (type) {
    case "checkbox":
      return (
        <Grid item xs={xs} md={md} lg={lg}>
          <FormLabel>{label}</FormLabel>
          {props?.options.map((cur) => {
            return (
              <>
                <label>{cur?.label}</label>
                <input
                  type={type}
                  name={cur?.name}
                  checked={cur?.checked}
                  onChange={onChange}
                  {...cur}
                />
              </>
            );
          })}
          ;
        </Grid>
      );

    case "textarea":
      return (
        <Grid item xs={xs} md={md} lg={lg}>
          <FormLabel>{label}</FormLabel>
          <textarea name={name} value={value} onChange={onChange} {...props} />
        </Grid>
      );

    case "select":
      return (
        <Grid item xs={xs} md={md} lg={lg}>
          <FormLabel>{label}</FormLabel>
          <Select
            name={name}
            value={value}
            onChange={onChange}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            {props?.options.map((cur) => {
              return <MenuItem value={cur.value}>{cur.label}</MenuItem>;
            })}
          </Select>
        </Grid>
      );
    default:
      return (
        <Grid item xs={xs} md={md} lg={lg}>
          <FormLabel>{label}</FormLabel>
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="standard-multiline-flexible"
            label="Multiline"
            variant="standard"
            {...props}
          />
        </Grid>
      );
  }
};

export default CustomInput;
