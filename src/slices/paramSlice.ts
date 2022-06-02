import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateSlug: "",
  regionSlug: "",
  categorySlug: "",
  page: 1,
  limit: 10,
};

export const paramSlice: any = createSlice({
  name: "param",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.stateSlug = payload.stateSlug;
      state.regionSlug = payload.regionSlug;
      state.categorySlug = payload.categorySlug;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { setFilter } = paramSlice.actions;

export default paramSlice.reducer;
