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
      if (
        state.cartItems.filter((item) => item.id === action.payload.id).length >
        0
      ) {
        alert("ITEM ALREADY ADDED! CHECK YOUR CART FOR INCREASING QUANTITY.");
        return;
      }

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
