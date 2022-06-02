import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import paramSlice from "./slices/paramSlice";
import propertySlice from "./slices/propertySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertySlice,
    param: paramSlice,
  },
});
