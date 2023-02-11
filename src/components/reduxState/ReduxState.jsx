import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const ReduxState = createSlice({
  name: "users",
  initialState,
  reducers: {
    LoginUser: (state, actions) => {
      state.current = actions.payload;
    },
    logoutUser: (state) => {
      state.current = null;
    },
  },
});

export const { LoginUser, logoutUser } = ReduxState.actions;

export default ReduxState.reducer;

/*to read you will use useSelector , then to write you will use useDispatch */

/*Actions are plain JavaScript object that contains information. 
Action is one of the building blocks of Redux. 
Redux is a state managing library used in JavaScript apps. 
It is used to manage the data and the state of the application.
Uses of Redux: With the help of redux it is easy to manage state and data */
