import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthUser } from "../types/User";

interface IAuth {
  user: IAuthUser | null;
  loading: boolean;
  error: boolean;
}

const initialValue: IAuth = {
  user: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth_Slice",
  initialState: initialValue,
  reducers: {
    startLogin(state) {
      state.user = null;
      state.loading = true;
      state.error = false;
      return state;
    },
    setUser(state, action: PayloadAction<IAuthUser>) {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
      return state;
    },
    setError(state) {
      state.user = null;
      state.loading = false;
      state.error = true;
      return state;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = false;
      return state;
    },
  },
});

export default authSlice.reducer;
export const { startLogin, setUser, setError, logout } = authSlice.actions;
