// @ts-nocheck
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
  async (
    { stateSlug, regionSlug, categorySlug, page, limit }: any,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.getAllProperty(
        stateSlug,
        regionSlug,
        categorySlug,
        page,
        limit
      );
      return data;
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const onLoadProperty: any = createAsyncThunk(
  "property/onLoadProperty",
  async (
    { stateSlug, regionSlug, categorySlug, page, limit }: any,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.getAllProperty(
        stateSlug,
        regionSlug,
        categorySlug,
        page,
        limit
      );
      return data;
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const getProperty: any = createAsyncThunk(
  "property/getProperty",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.getProperty(id);
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      // Toast(error?.response?.data?.message, "info");
    }
  }
);
const initialState = {
  properties: null,
  pagination: null,
  userProperties: [],
  loading: false,
  firstLoading: false,
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
    [onLoadProperty.pending]: (state, { payload }) => {
      state.firstLoading = true;
    },
    [onLoadProperty.fulfilled]: (state, { payload }) => {
      state.properties = payload;
      state.firstLoading = false;
    },
    [getProperty.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getProperty.fulfilled]: (state, { payload }) => {
      state.property = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setFilter } = propertySlice.actions;

export default propertySlice.reducer;
