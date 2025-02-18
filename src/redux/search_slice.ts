import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISearch {
  query: string;
}
const initialValue: ISearch = {
  query: " ",
};
const searchSlice = createSlice({
  name: "search_slice",
  initialState: initialValue,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.query = action.payload;
      return state;
    },
  },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
