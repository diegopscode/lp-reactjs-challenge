import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./Reducers/products";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
