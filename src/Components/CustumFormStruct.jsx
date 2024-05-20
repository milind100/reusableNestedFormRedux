import React from "react";
import { useDispatch } from "react-redux";
import { formValueChange } from "../features/form/recurssiveFormSlice";
import CustomInput from "./CustomInput";
import { Grid, Stack, Typography } from "@mui/material";

const CustumFormStruct = ({ formObj, formName }) => {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, type, value } = e.target;

    const path = `${formName}.${name}`;
    dispatch(formValueChange({ path: path, value }));
  };
  return (
    <Grid container>
      {formObj?.map(({ fieldType, ...cur }) => {
        if (fieldType === "subForm") {
          return (
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              sx={{ border: "4px solid black", ml: "100px" }}
            >
              <Stack>
                <Typography variant="h5">{cur.label}</Typography>
                <CustumFormStruct
                  formObj={cur?.fields}
                  formName={`${formName}.${cur.name}`}
                />
              </Stack>
            </Grid>
          );
        }
        return (
          <CustomInput key={cur.name} {...cur} onChange={handleInputChange} />
        );
      })}
    </Grid>
  );
};

export default CustumFormStruct;
