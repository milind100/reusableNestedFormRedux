import React from "react";
import CustomInput from "./CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {
  formValueChange,
  selectFormValue,
} from "../features/form/recurssiveFormSlice";

const CustomForm = ({ formObj, formName }) => {
  const dispatch = useDispatch();
  const formValue = useSelector(selectFormValue);
  const handleInputChange = (e) => {
    const { name, type, value } = e.target;

    const path = `${formName}.${name}`;
    dispatch(formValueChange({ path, value }));
  };
  const handleSubmit = (e) => {
    console.log("submit");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {formObj?.map((cur) => {
          return (
            <CustomInput key={cur.name} {...cur} onChange={handleInputChange} />
          );
        })}
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default CustomForm;
