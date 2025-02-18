import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product_slice";
import authReducer from "./auth_slice";
import search_slice from "./search_slice";

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    search: search_slice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
