import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// Reducer

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCount: (state) => {
      state.counter > 0 && (state.counter = state.counter - 1);
    },
  },
});

// Action
export const { incrementCount, decrementCount } = counterSlice.actions;
