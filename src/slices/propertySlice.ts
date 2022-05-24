import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import Toast from "../utils/Toast";

export const postProperty: any = createAsyncThunk(
  "property/postProperty",
  async (formdata: any, { rejectWithValue }) => {
    try {
      await api.postProperty(formdata);
      Toast("Property successfully uploaded", "info");
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const getAllPropertyByUser: any = createAsyncThunk(
  "property/getAllPropertyByUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllPropertyByUser();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const getAllProperty: any = createAsyncThunk(
  "property/getAllProperty",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllProperty();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);

const initialState = {
  properties: [],
  userProperties: [],
  loading: false,
  property: null,
};

export const propertySlice: any = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: {
    [postProperty.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [postProperty.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [getAllPropertyByUser.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllPropertyByUser.fulfilled]: (state, { payload }) => {
      state.userProperties = payload;
      state.loading = false;
    },
    [getAllProperty.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllProperty.fulfilled]: (state, { payload }) => {
      state.properties = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { resetAuth } = authSlice.actions;

export default propertySlice.reducer;
