import React from "react";
import { useDispatch } from "react-redux";
import { LoginUser, logoutUser } from "./reduxState/ReduxState";

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            LoginUser({
              username: "Delight",
              age: 20,
              email: "delight@gmail.com",
              stack: "fullstack",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LoginPage;
