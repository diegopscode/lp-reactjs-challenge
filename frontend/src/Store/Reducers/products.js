import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    item: {},
    search: "",
  },
  reducers: {
    fecthProducts: (state, action) => {
      state.items = action.payload;
    },
    fetchProduct: (state, action) => {
      state.item = action.payload;
    },
    setProductSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setProductSearch, fecthProducts, fetchProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
