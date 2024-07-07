import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/mutations/users/index";

const AuthHook = () => {
  const { data, loading, error } = useQuery(GET_USER);
  if(!loading && !error){
    return data;
    console.log(data)
  } else {
    return null;
  }
};

const AuthProvider = ({children}: {children:React.ReactNode}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = AuthHook();
  if(auth && location.includes("signin")){
    navigate("/dashboard");
  }
  return <>{children}</>;
}
export default AuthProvider;
