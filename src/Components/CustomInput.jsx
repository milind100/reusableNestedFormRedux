import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import React from "react";

const CustomInput = ({ type, name, label, value, onChange, props }) => {
  switch (type) {
    case "checkbox":
      return (
        <>
          <label>{label}</label>
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
                ;
              </>
            );
          })}
          ;
        </>
      );

    case "textarea":
      return (
        <>
          <label>{label}</label>
          <textarea name={name} value={value} onChange={onChange} {...props} />
        </>
      );

    case "select":
      return (
        <>
          <label>{label}</label>
          <select name={name} value={value} onChange={onChange}>
            {props?.option.map((cur) => {
              return <option value={cur.value}>{cur.label}</option>;
            })}
          </select>
        </>
      );
    default:
      return (
        <>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            {...props}
          />
          ;
        </>
      );
  }
};

export default CustomInput;
