import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const slice1 = createSlice({
  name: "reducer1",
  initialState,
  reducers: {
    incre: (state) => state + 1,
    decre: (state) => state - 1,
  },
});

export const { incre, decre } = slice1.actions;

export const reducer1 = slice1.reducer;
