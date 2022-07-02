// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import Toast from "../utils/Toast";

export const createEnquiry: any = createAsyncThunk(
  "enquiry/createEnquiry",
  async (formdata: any, { rejectWithValue }) => {
    try {
      await api.createEnquiry(formdata);
      Toast("Successfully submitted, we will get back to you shortly", "info");
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
    }
  }
);
export const getAllEnquiry: any = createAsyncThunk(
  "enquiry/getAllEnquiry",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllEnquiries();
      return data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
    }
  }
);

export const deleteEnquiry: any = createAsyncThunk(
  "enquiry/deleteEnquiry",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteEnquiry(id);
      return id;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
    }
  }
);

const initialState = {
  enquiries: [],
  loading: false,
};

export const enquirySlice: any = createSlice({
  name: "enquiry",
  initialState,
  reducers: {},
  extraReducers: {
    [createEnquiry.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [createEnquiry.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [deleteEnquiry.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [deleteEnquiry.fulfilled]: (state, { payload }) => {
      state.enquiries = state.enquiries.filter(
        (enquiry) => enquiry._id !== payload
      );
      state.loading = false;
    },
    [getAllEnquiry.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllEnquiry.fulfilled]: (state, { payload }) => {
      state.enquiries = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setFilter } = enquirySlice.actions;

export default enquirySlice.reducer;
