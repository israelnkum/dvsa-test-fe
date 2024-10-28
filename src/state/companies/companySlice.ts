import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  deleteCompany,
  getAllCompanies,
  updateCompany,
} from "./companyActions.ts";
import { Company, CompanyState } from "../../types/company.ts";

const initialState: CompanyState = {
  filter: {
    page: 1,
    vehicles: false
  },
  companies: {
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

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateCompanyFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        createCompany.fulfilled,
        (state, action: PayloadAction<Company>) => {
          state.companies.data.push(action.payload);
        },
      )
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.companies = action.payload;
      })
      .addCase(
        updateCompany.fulfilled,
        (state, action: PayloadAction<Company>) => {
          state.companies.data = state.companies.data.map(
            (company: Company) => {
              return company.id === action.payload.id
                ? action.payload
                : company;
            },
          );
        },
      )
      .addCase(
        deleteCompany.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.companies.data = state.companies.data.filter(
            (company: Company) => company.id !== action.payload,
          );
        },
      );
  },
});

export const { updateCompanyFilter } = companySlice.actions

export default companySlice.reducer;
