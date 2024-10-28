import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
} from "./vehicleActions.ts";
import { Vehicle, VehicleState } from "../../types/vehicle.ts";

const initialState: VehicleState = {
  filter: {
    page: 1,
    vehicles: false
  },
  vehicles: {
    links: {
      first: "",
      last: "",
      prev: null,
      next: null,
    },
    data: [],
    meta: {
      from: 0,
      to: 0,
      total: 0,
      current_page: 1,
      per_page: 10,
    },
  },
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    updateVehicleFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        createVehicle.fulfilled,
        (state, action: PayloadAction<Vehicle>) => {
          state.vehicles.data.push(action.payload);
        },
      )
      .addCase(getAllVehicles.fulfilled, (state, action) => {
        state.vehicles = action.payload;
      })
      .addCase(
        updateVehicle.fulfilled,
        (state, action: PayloadAction<Vehicle>) => {
          state.vehicles.data = state.vehicles.data.map(
            (company: Vehicle) => {
              return company.id === action.payload.id
                ? action.payload
                : company;
            },
          );
        },
      )
      .addCase(
        deleteVehicle.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.vehicles.data = state.vehicles.data.filter(
            (company: Vehicle) => company.id !== action.payload,
          );
        },
      );
  },
});

export const { updateVehicleFilter } = vehicleSlice.actions;

export default vehicleSlice.reducer;
