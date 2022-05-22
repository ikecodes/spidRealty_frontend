import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import propertySlice from "./slices/propertySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertySlice,
  },
});
