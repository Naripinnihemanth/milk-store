import { createSlice as reduxSlice } from "@reduxjs/toolkit";
import { curdActions } from "../curd/CurdPackets";
const initialState = {
  ML1000: 5,
  ML500: 5,
  ML250: 5,
};

const milkSlice = reduxSlice({
  name: "milk",
  initialState,
  reducers: {
    orderML1000: (state, action) => {
      state.ML1000 -= action.payload;
    },
    orderML500: (state, action) => {
      state.ML500 -= action.payload;
    },
    orderML250: (state, action) => {
      state.ML250 -= action.payload;
    },
    reloadML1000: (state, action) => {
      state.ML1000 += action.payload;
    },
    reloadML500: (state, action) => {
      state.ML500 += action.payload;
    },
    reloadML250: (state, action) => {
      state.ML250 += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(curdActions.orderRS10, (state) => {
      state.ML250--;
    });
  },
});

export default milkSlice.reducer;
export const MilkActions = milkSlice.actions;
