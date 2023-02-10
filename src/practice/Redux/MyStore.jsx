import { configureStore } from "@reduxjs/toolkit";
import ReduxState from "../../components/reduxState/ReduxState";

export const store = configureStore({
  reducer: {
    ReduxState,
  },
});
