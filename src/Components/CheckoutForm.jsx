import React from "react";
import CustomForm from "./CustomForm";

const CheckoutForm = () => {
  const myfromObj = [
    {
      fieldType: "main",
      name: "email",
      type: "text",
      label: "Email Address",
      isRequired: true,
      pattern: "email",
      error: ["Email is required", "Please enter a valid email"],
      xs: 6,
    },
    {
      fieldType: "main",
      name: "password",
      type: "password",
      label: "Password",
      isRequired: true,
      xs: 6,
      error: ["Password is required"],
    },
    {
      name: "State",
      type: "select",
      label: "State",
      options: [
        { label: "Gujarat", value: "gj" },
        { label: "Bihar", value: "bi" },
        { label: "Asam", value: "as" },
        { label: "Telangana", value: "tel" },
        { label: "Madhya Pradesh", value: "mp" },
        { label: "Daman", value: "dm" },
      ],
      xs: 6,
      isRequired: true,
    },
    {
      fieldType: "subForm",
      name: "permanantAddress",
      label: "Permanant Address",
      fields: [
        {
          name: "fname",
          type: "text",
          label: "First Name",
          isRequired: true,
          pattern: "name",
          error: ["please enter a first name"],
          xs: 6,
        },
        {
          name: "lname",
          type: "text",
          label: "Last Name",
          isRequired: true,
          pattern: "name",
          error: ["please enter a last name"],
          xs: 6,
        },
        {
          name: "city",
          type: "text",
          label: "City",
          xs: 6,
          isRequired: true,
        },
        {
          name: "State",
          type: "select",
          label: "State",
          xs: 6,
          options: [
            { label: "Gujarat", value: "gj" },
            { label: "Bihar", value: "bi" },
            { label: "Asam", value: "as" },
            { label: "Telangana", value: "tel" },
            { label: "Madhya Pradesh", value: "mp" },
            { label: "Daman", value: "dm" },
          ],
          isRequired: true,
        },
      ],
    },
    {
      fieldType: "subForm",
      name: "currentAddress",
      label: "Current Address",
      fields: [
        {
          name: "fname",
          type: "text",
          label: "First Name",
          isRequired: true,
          pattern: "name",
          error: ["please enter a first name"],
          xs: 6,
        },
        {
          name: "lname",
          type: "text",
          label: "Last Name",
          isRequired: true,
          pattern: "name",
          error: ["please enter a last name"],
          xs: 6,
        },
        {
          name: "city",
          type: "text",
          label: "City",
          xs: 6,
          isRequired: true,
        },
        {
          name: "State",
          type: "select",
          label: "State",
          xs: 6,
          options: [
            { label: "Gujarat", value: "gj" },
            { label: "Bihar", value: "bi" },
            { label: "Asam", value: "as" },
            { label: "Telangana", value: "tel" },
            { label: "Madhya Pradesh", value: "mp" },
            { label: "Daman", value: "dm" },
          ],
          isRequired: true,
        },
        {
          fieldType: "subForm",
          name: "confirmCurrentAddress",
          label: "Confirm Current Address",
          fields: [
            {
              name: "fname",
              type: "text",
              label: "First Name",
              isRequired: true,
              pattern: "name",
              error: ["please enter a first name"],
              xs: 6,
            },
            {
              name: "lname",
              type: "text",
              label: "Last Name",
              isRequired: true,
              pattern: "name",
              error: ["please enter a last name"],
              xs: 6,
            },
            {
              name: "city",
              type: "text",
              label: "City",
              xs: 6,
              isRequired: true,
            },
            {
              name: "State",
              type: "select",
              label: "State",
              xs: 6,
              options: [
                { label: "Gujarat", value: "gj" },
                { label: "Bihar", value: "bi" },
                { label: "Asam", value: "as" },
                { label: "Telangana", value: "tel" },
                { label: "Madhya Pradesh", value: "mp" },
                { label: "Daman", value: "dm" },
              ],
              isRequired: true,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <CustomForm formObj={myfromObj} formName={"signIn"} />
    </div>
  );
};

export default CheckoutForm;
export const formAtrr = [
  {
    name: "fname",
    type: "text",
    label: "First Name",
    isRequired: true,
    pattern: "name",
    error: ["please enter a first name"],
  },
  {
    name: "lname",
    type: "text",
    label: "Last Name",
    isRequired: true,
    pattern: "name",
    error: ["please enter a last name"],
  },
  {
    name: "age",
    type: "number",
    maxlength: 2,
    label: "Age(years)",
    isRequired: true,
    pattern: "age",
    error: ["please enter the age"],
  },
  {
    name: "phone",
    type: "number",
    maxlength: 10,
    label: "Phone",
    isRequired: true,
    pattern: "phone",
    error: ["please enter valid number "],
  },
  {
    name: "email",
    type: "text",
    label: "Email Address",
    isRequired: true,
    pattern: "email",
    error: ["Email is required", "Please enter a valid email"],
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    isRequired: true,
    error: ["Password is required"],
  },

  {
    name: "phone",
    type: "number",
    maxlength: 10,
    label: "Phone",
    isRequired: true,
    pattern: "phone",
    error: ["please enter valid number "],
  },
  {
    name: "message",
    type: "textarea",
    label: "message",
  },
  {
    name: "street",
    type: "text",
    label: "Street",
    isRequired: true,
  },
  {
    name: "city",
    type: "text",
    label: "City",
    isRequired: true,
  },
  {
    name: "State",
    type: "select",
    label: "State",
    options: [
      { label: "Gujarat", value: "gj" },
      { label: "Bihar", value: "bi" },
      { label: "Asam", value: "as" },
      { label: "Telangana", value: "tel" },
      { label: "Madhya Pradesh", value: "mp" },
      { label: "Daman", value: "dm" },
    ],
    isRequired: true,
  },

  {
    name: "male",
    type: "radio",
    label: "Male",
  },
  {
    name: "female",
    type: "radio",
    label: "Female",
  },
  {
    name: "other",
    type: "radio",
    label: "other",
  },

  {
    name: "userType",
    type: "checkbox",
    label: "Your Type",
    options: [
      { name: "student", label: "Student", checked: false },
      { name: "office", label: "Office", checked: false },
      { name: "majdoor", label: "Majdoor", checked: false },
    ],
  },
];
