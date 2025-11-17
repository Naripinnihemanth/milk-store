import { createSlice as reduxSlice } from "@reduxjs/toolkit";
const initialState = {
  RS10: 20,
  RS30: 20,
};

const curdSlice = reduxSlice({
  name: "curd",
  initialState,
  reducers: {
    orderRS10: (state) => {
      state.RS10--;
    },
    orderRS30: (state) => {
      state.RS30--;
    },
    reloadRS10: (state, action) => {
      state.RS10 += action.payload;
    },
    reloadRS30: (state, action) => {
      state.RS30 += action.payload;
    },
  },
});

export default curdSlice.reducer;
export const curdActions = curdSlice.actions;
