import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//api call
const baseUrl = "https://fakestoreapi.com/products";
export const getProducts = createAsyncThunk(
  "Home/getProducts",

  () => {
    return fetch(baseUrl)
      .then((res) => res.json())
      .then((json) => json);
  }
);

//state
const initialState = {
  productsList: [],
  loading: false,
  err: {},
};

//reducer
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    //pending => show spinner
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      //fulfilled => render the result
      state.loading = false;
      state.productsList = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      //rejected
      state.loading = false;
      state.err = action.payload;
    },
  },
});

export default productsSlice.reducer;
//action
