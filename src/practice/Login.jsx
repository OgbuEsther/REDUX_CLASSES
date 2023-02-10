import React from "react";
import { useDispatch } from "react-redux";

import { LoginUser, logoutUser } from "../reduxState/ReduxState";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            LoginUser({
              userName: "delight",
              email: "delightjoe@gmail.com",
              age: 20,
              stack: "MERN",
            })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Login;
