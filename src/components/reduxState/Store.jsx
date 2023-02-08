import { configureStore } from "@reduxjs/toolkit";
import ReduxState from "./ReduxState";

export const store = configureStore({
  reducer: {
    ReduxState,
  },
});
