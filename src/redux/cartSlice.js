import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCounter: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCounter = state.cartCounter + 1;

      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartCounter = state.cartCounter - 1;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
