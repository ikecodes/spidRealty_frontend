import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import Toast from "../utils/Toast";

// export const getUser: any = createAsyncThunk(
//   "auth/getUser",
//   async (arg, { rejectWithValue }) => {
//     try {
//       const { data }: any = await api.getMe();
//       return data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

export const signup: any = createAsyncThunk(
  "auth/signup",
  async ({ formdata, navigate }: any, { rejectWithValue }) => {
    try {
      const { data } = await api.signup(formdata);
      await api.sendEmail({ email: data.data.email });
      Toast("Registration successful", "success");
      navigate("/emailConfirmation");
      return data.data;
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "error");
    }
  }
);
export const verify: any = createAsyncThunk(
  "auth/verify",
  async ({ formdata, navigate }: any, { rejectWithValue }) => {
    try {
      await api.verifyToken(formdata);
      Toast("Email verification successful", "success");
      navigate("/login");
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);

export const login: any = createAsyncThunk(
  "auth/login",
  async (formdata, { rejectWithValue }) => {
    try {
      const {
        data: { access_token },
      } = await api.login(formdata);
      Toast("Login successfull", "success");
      return access_token;
    } catch (error: any) {
      rejectWithValue(error?.response?.data);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
const initialState = {
  user: null,
  loading: false,
  token: null,
  data: null,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      localStorage.setItem("data", JSON.stringify(payload));
      state.data = payload;
      state.loading = false;
    },
    [verify.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [verify.fulfilled]: (state, { payload }) => {
      localStorage.clear();
      state.loading = false;
    },
    [login.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.token = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;
