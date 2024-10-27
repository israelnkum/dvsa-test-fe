import { createSlice } from "@reduxjs/toolkit";
import { getAnalytics } from "./dashboardActions.ts";
import { DashboardState } from "../../types/common.ts";

const initialState: DashboardState = {
  analytics: {
    companies: 0,
    vehicles: 0
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnalytics.fulfilled, (state, action) => {
        state.analytics = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
