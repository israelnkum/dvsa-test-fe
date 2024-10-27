import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.ts";

export const getAnalytics = createAsyncThunk(
  "dashboard/getAnalytics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api().get('/analytics');

      return res.data.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);