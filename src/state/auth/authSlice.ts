import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authActions.ts";
import { AuthState } from "../../types/auth.ts";

const initialState: AuthState = {
  authenticated: false,
  token: "",
  email: ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ email: string; token: string }>) => {
          state.authenticated = true;
          state.token = action.payload.token;
          state.email = action.payload.email;
        },
      )
    ;
  },
});

export default authSlice.reducer;
