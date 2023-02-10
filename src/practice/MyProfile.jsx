import React from "react";
import { useSelector } from "@reduxjs/toolkit";

const MyProfile = () => {
  const user = useSelector((state) => state.ReduxState.current);
  return (
    <div>
      <pre>name :{user?.userName}</pre>
      <pre>email:{user?.email} </pre>
      <pre>age :{user?.age} </pre>
      <pre>stack :{user?.stack}</pre>
    </div>
  );
};

export default MyProfile;
