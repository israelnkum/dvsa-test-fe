import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.ts";

export const getAllVehicles = createAsyncThunk(
  "vehicles/getAllVehicles",
  async (params: URLSearchParams, { rejectWithValue }) => {
    try {
      const res = await api().get(`/vehicles?${params}`);

      return res.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);

export const createVehicle = createAsyncThunk(
  "vehicles/new",
  async (data: Record<any, any>, { rejectWithValue }) => {
    try {
      const res = await api().post("/vehicles", data);

      return res.data.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);

export const updateVehicle = createAsyncThunk(
  "vehicles/update",
  async (data: Record<any, any>, { rejectWithValue }) => {
    try {
      const res = await api().patch(`/vehicles/${data.id}`, data);

      return res.data.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);

export const deleteVehicle = createAsyncThunk(
  "vehicles/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await api().delete(`/vehicles/${id}`);

      return id;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      throw rejectWithValue(err.response.data);
    }
  },
);


export const findParkingPays = createAsyncThunk(
    "vehicles/parkingBays",
    async (data: Record<any, any>, { rejectWithValue }) => {
        try {
            const res = await api().post("/get-bays", data);

            return res.data.data;
        } catch (err: any) {
            if (!err.response) {
                throw err;
            }

            throw rejectWithValue(err.response.data);
        }
    },
);