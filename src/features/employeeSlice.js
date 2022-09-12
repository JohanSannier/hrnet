import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addEmployee: (state, { payload }) => {
      state.employees.push(payload);
    },
    sortEmployees: (state, { payload }) => {
      state.employees = payload;
    },
  },
});

export const { addEmployee, sortEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
