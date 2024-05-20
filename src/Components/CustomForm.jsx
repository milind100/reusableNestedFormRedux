import React from "react";
import CustumFormStruct from "./CustumFormStruct";

const CustomForm = ({ formObj, formName }) => {
  const handleSubmit = (e) => {
    console.log("submit");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <CustumFormStruct formObj={formObj} formName={formName} />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default CustomForm;
