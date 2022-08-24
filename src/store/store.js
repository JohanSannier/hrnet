import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/countSlice";
import employeeReducer from "../features/employeeSlice";

export const store = configureStore({
  reducer: {
    list: employeeReducer,
    storage: countSlice,
  },
});
