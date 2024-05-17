import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValue: {},
  formError: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formValueChange: (state, action) => {
      const { path, value } = action.payload;

      state.formValue = stringToNestedObjectRecursive(
        path,
        value,
        state.formValue
      );
    },
    formValueErrors: () => {},
  },
});

export function stringToNestedObjectRecursive(keyPath, value = "", state = {}) {
  if (!keyPath.includes(".")) {
    return { ...state, [keyPath]: value };
  }

  const paths = keyPath.split(".");

  const createNestObj = (pathsArray, prevState) => {
    const [first, ...rest] = pathsArray;
    if (rest.length === 0) {
      return { [first]: value };
    }
    const nextState = prevState && prevState[first] ? prevState[first] : {};
    return {
      [first]: {
        ...nextState,
        ...createNestObj(rest, nextState),
      },
    };
  };

  return {
    ...state,
    ...createNestObj(paths, state),
  };
}

export const { formValueChange, formValueErrors } = formSlice.actions;

export const selectFormValue = (state) => state.formSlice.formValue;
export const selectFormErrors = (state) => state.formSlice.formError;

export default formSlice.reducer;
