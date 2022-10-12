import { createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: "first",
  initialState: {
    name: "Narek",
    surname: "Grigoryan",
    count: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.newName;
      //   state ={...state, name: action.payload};
    },
    changeCount: (state, { payload: { newState, type } }) => {
      if (type === "INCREMENT") {
        state.count = newState + 1;
      }
    },
    discrement: (state) => {
      state.count = state.count - 1;
    },
    setToTen: (state) => {
      state.count = 10;
    },
  },
});
export const { setName, changeCount, setToTen, discrement } =
  firstSlice.actions;
export default firstSlice.reducer;
