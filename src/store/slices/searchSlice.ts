import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearSearchTerm: () => {
      return "";
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
