import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import Toast from "../utils/Toast";

export const signup: any = createAsyncThunk(
  "auth/signup",
  async ({ formdata, navigate }: any, { rejectWithValue }) => {
    try {
      const { data } = await api.signup(formdata);
      await api.sendEmail({ email: data.data.email });
      Toast("Registration successful", "info");
      navigate("/emailConfirmation");
      return data.data.email;
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const verify: any = createAsyncThunk(
  "auth/verify",
  async ({ formdata, navigate }: any, { rejectWithValue }) => {
    try {
      await api.verifyToken(formdata);
      Toast("Email verification successful", "info");
      navigate("/login");
    } catch (error: any) {
      rejectWithValue(error);
      Toast(error?.response?.data?.message, "info");
    }
  }
);

export const login: any = createAsyncThunk(
  "auth/login",
  async ({ formdata, navigate }: any, { rejectWithValue }) => {
    try {
      const {
        data: { token },
      } = await api.login(formdata);
      Toast("Login successful", "info");
      navigate("/agent/dashboard");
      localStorage.setItem("token", token);
      return token;
    } catch (error: any) {
      rejectWithValue(error?.response?.data?.message);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const forgotPassword: any = createAsyncThunk(
  "auth/forgotPassword",
  async (formdata, { rejectWithValue }) => {
    try {
      await api.forgotPassword(formdata);
      Toast("Password reset link successfully sent to mail", "info");
    } catch (error: any) {
      rejectWithValue(error?.response?.data?.message);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const resetPassword: any = createAsyncThunk(
  "auth/resetPassword",
  async ({ formdata, resetToken, navigate }: any, { rejectWithValue }) => {
    try {
      await api.resetPassword(formdata, resetToken);
      Toast("Your password has been reset, you can now login", "info");
      navigate("/login");
    } catch (error: any) {
      rejectWithValue(error?.response?.data?.message);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const getMe: any = createAsyncThunk(
  "auth/getMe",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await api.getMe();
      return data.data;
    } catch (error: any) {
      rejectWithValue(error?.response?.data);
      // Toast(error?.response?.data?.message, "info");
    }
  }
);
export const uploadId: any = createAsyncThunk(
  "auth/uploadId",
  async (formdata, { rejectWithValue }) => {
    try {
      await api.uploadId(formdata);
      Toast("Id upload was successful", "info");
    } catch (error: any) {
      rejectWithValue(error?.response?.data);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const updatePhoto: any = createAsyncThunk(
  "auth/updatePhoto",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await api.updatePhoto(formdata);
      Toast("Profile photo update successful successful", "info");
      return data.data;
    } catch (error: any) {
      rejectWithValue(error?.response?.data);
      Toast(error?.response?.data?.message, "info");
    }
  }
);
export const updatePassword: any = createAsyncThunk(
  "auth/updatePassword",
  async (formdata, { rejectWithValue }) => {
    try {
      await api.updatePassword(formdata);
      Toast("Password has been successfully updated", "info");
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
      localStorage.setItem("email", payload);
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
      state.token = payload;
      state.loading = false;
    },
    [getMe.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [updatePhoto.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [uploadId.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [uploadId.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [updatePassword.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [updatePassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [forgotPassword.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [resetPassword.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;
