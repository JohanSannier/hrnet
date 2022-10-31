import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employeeSlice";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    list: employeeReducer,
    search: searchSlice,
  },
});
