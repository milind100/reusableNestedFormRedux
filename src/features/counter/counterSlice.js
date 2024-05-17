import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 0,
  status: "idle",
  formPath: {},
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state, action) => {
      state.value += 1;
      const obj1 = stringToNestedObjectRecrssive(
        action.payload,
        10,
        current(state.formPath)
      );
      state.formPath = obj1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;

export function stringToNestedObjectRecrssive(keyPath, value = "", state) {
  const paths = keyPath.split(".");

  const createNestObj = (commingArray, prevState) => {
    if (commingArray.length === 0) return value;
    const [first, ...rest] = commingArray;
    const beforeState = prevState?.[first];
    return { [first]: { ...beforeState, ...createNestObj(rest, beforeState) } };
  };
  return createNestObj(paths, state);
}
