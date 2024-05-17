import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import formSlice from "../features/form/recurssiveFormSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formSlice: formSlice,
  },
});
