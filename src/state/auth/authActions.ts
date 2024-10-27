import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.ts";

export const login = createAsyncThunk(
  "auth/login",
  async (data: Record<any, any>, { rejectWithValue }) => {
    try {
      const res = await api().post("login", data);
        console.log(data)
      return res.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      throw rejectWithValue(err.response.data);
    }
  },
);

export const getMyProfile = createAsyncThunk(
  "auth/getMyProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api().get("/me");

      return res.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      throw rejectWithValue(err.response.data);
    }
  },
);