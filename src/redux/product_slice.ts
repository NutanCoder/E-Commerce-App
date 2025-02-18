import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface IProductSlice {
  products: Product[];
  loading: boolean;
  error: boolean;
}

const initialValue: IProductSlice = {
  products: [],
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: "product_Slice",
  initialState: initialValue,
  reducers: {
    fetchProductStart(state) {
      (state.products = []), (state.loading = true);
      state.error = false;
      return state;
    },
    setProcuctSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.loading = false;
      state.error = false;
      return state;
    },
    setProcuctFail(state) {
      state.products = [];
      state.loading = false;
      state.error = true;
      return state;
    },
  },
});
export default productSlice.reducer;
export const { fetchProductStart, setProcuctSuccess, setProcuctFail } =
  productSlice.actions;
