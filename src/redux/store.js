import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});
