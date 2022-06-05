// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
// import Toast from "../utils/Toast";

export const getAllAgents: any = createAsyncThunk(
  "admin/getAllAgents",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getAgents();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const verifyUser: any = createAsyncThunk(
  "admin/verifyAgent",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.verifyUser(id);
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const getPropertiesByAdmin: any = createAsyncThunk(
  "admin/getPropertiesByAdmin",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getPropertiesByAdmin();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const verifyProperty: any = createAsyncThunk(
  "admin/verifyProperty",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.verifyProperty(id);
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const markAsSold: any = createAsyncThunk(
  "admin/markAsSold",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.markAsSold(id);
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
const initialState = {
  agents: [],
  properties: [],
  articles: [],
  loading: false,
};
export const adminSlice: any = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAgents.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllAgents.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.agents = payload;
    },
    [getPropertiesByAdmin.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getPropertiesByAdmin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.properties = payload;
    },
    [verifyUser.fulfilled]: (state, { payload }) => {
      state.agents = state.agents.map((agent) =>
        agent._id === payload._id ? payload : agent
      );
    },
    [verifyProperty.fulfilled]: (state, { payload }) => {
      state.properties = state.properties.map((property) =>
        property._id === payload._id ? payload : property
      );
    },
    [markAsSold.fulfilled]: (state, { payload }) => {
      state.properties = state.properties.map((property) =>
        property._id === payload._id ? payload : property
      );
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setFilter } = paramSlice.actions;

export default adminSlice.reducer;
