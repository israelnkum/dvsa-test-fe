import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.ts";

export const getAllCompanies = createAsyncThunk(
  "companies/getAllCompanies",
  async (params: URLSearchParams, { rejectWithValue }) => {
    try {
      const res = await api().get(`/companies?${params}`);

      return res.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);

export const createCompany = createAsyncThunk(
  "companies/new",
  async (data: Record<any, any>, { rejectWithValue }) => {
    try {
      const res = await api().post("/companies", data);

      return res.data.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);

export const updateCompany = createAsyncThunk(
  "companies/update",
  async (data: Record<any, any>, { rejectWithValue }) => {
    try {
      const res = await api().patch(`/companies/${data.id}`, data);

      return res.data.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);

export const deleteCompany = createAsyncThunk(
  "companies/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await api().delete(`/companies/${id}`);

      return id;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);
