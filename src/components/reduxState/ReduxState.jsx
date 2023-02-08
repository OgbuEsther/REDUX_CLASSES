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
  },
});

export const {LoginUser} = ReduxState.actions;

export default ReduxState.reducer;


/*to read you will use useSelector , then to retriveve you will use useDispatch */