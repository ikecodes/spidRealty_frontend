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

const initialState = {
  properties: null,
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
  },
});

// Action creators are generated for each case reducer function
// export const { resetAuth } = authSlice.actions;

export default propertySlice.reducer;
