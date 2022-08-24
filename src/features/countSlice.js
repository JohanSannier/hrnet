import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, reset } = countlice.actions;

export default countlice.reducer;
