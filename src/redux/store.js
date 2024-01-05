import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
