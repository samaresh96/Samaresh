import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const slice2 = createSlice({
  name: "reducer2",
  initialState,
  reducers: {
    incre: (state) => state + 1,
    decre: (state) => state - 1,
  },
});

export const { incre, decre } = slice2.actions;
export const reducer2 = slice2.reducer;
