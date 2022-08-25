import { createSlice } from "@reduxjs/toolkit";

const initialState = { results: [] };

export const searchlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      state.results = payload;
    },
  },
});

export const { filterData } = searchlice.actions;

export default searchlice.reducer;
