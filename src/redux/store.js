import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { cartSlice } from "./cartSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cartSlice: cartSlice.reducer,
    productsSlice,
  },
});
