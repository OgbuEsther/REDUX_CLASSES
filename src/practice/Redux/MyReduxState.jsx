import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const ReduxState = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.current = actions.payload;
    },
    logout: (state) => {
      state.current = null;
    },
  },
});

export const { login, logout } = ReduxState.actions;

export default ReduxState.reducer;
