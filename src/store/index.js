import { configureStore } from "@reduxjs/toolkit";
import firstSliceReducer from "./firstSlice.js";
export const store = configureStore({
  reducer: firstSliceReducer,
});
