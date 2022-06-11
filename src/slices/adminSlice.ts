// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import Toast from "../utils/Toast";

export const getStats: any = createAsyncThunk(
  "admin/getStats",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getStats();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
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
export const getAllArticles: any = createAsyncThunk(
  "admin/getAllArticles",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getAllArticles();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const getArticle: any = createAsyncThunk(
  "admin/getArticle",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.getArticle(id);
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const createArticle: any = createAsyncThunk(
  "admin/createArticle",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await api.createArticle(formdata);
      Toast("Article successfully posted", "info");
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const deleteArticle: any = createAsyncThunk(
  "admin/deleteArticle",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteArticle(id);
      return id;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
export const updateArticle: any = createAsyncThunk(
  "admin/updateArticle",
  async ({ formdata, id }, { rejectWithValue }) => {
    try {
      const { data } = await api.updateArticle(formdata, id);
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      console.log(error?.response?.data?.message);
      //   Toast(error?.response?.data?.message, "info");
    }
  }
);
const initialState = {
  stats: null,
  agents: [],
  properties: [],
  articles: [],
  article: null,
  loading: false,
};
export const adminSlice: any = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    [getStats.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.stats = payload;
    },
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
    [getAllArticles.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllArticles.fulfilled]: (state, { payload }) => {
      state.articles = payload;
      state.loading = false;
    },
    [getArticle.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getArticle.fulfilled]: (state, { payload }) => {
      state.article = payload;
      state.loading = false;
    },
    [createArticle.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [createArticle.fulfilled]: (state, { payload }) => {
      state.articles = [...state.articles, payload];
      state.loading = false;
    },
    [deleteArticle.fulfilled]: (state, { payload }) => {
      state.articles = state.articles.filter(
        (article) => article._id !== payload
      );
    },
    [updateArticle.fulfilled]: (state, { payload }) => {
      state.articles = state.articles.map((article) =>
        article._id === payload._id ? payload : article
      );
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setFilter } = paramSlice.actions;

export default adminSlice.reducer;
