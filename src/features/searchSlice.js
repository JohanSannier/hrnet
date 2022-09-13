import { createSlice } from "@reduxjs/toolkit";

const initialState = { results: [], isActive: false };

export const searchlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      state.results = payload;
    },
    activeSearch: (state, { payload }) => {
      if (payload.length > 0) {
        state.isActive = true;
      } else {
        state.isActive = false;
      }
    },
  },
});

export const { filterData, activeSearch } = searchlice.actions;

export default searchlice.reducer;
