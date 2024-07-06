import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/mutations/users/index";

const AuthHook = () => {
  const { data, loading, error } = useQuery(GET_USER);
  const [userData, setUser] = useState<any>(null); // Use a descriptive name
  if(!loading && !error){
    return data;
  } else {
    return null;
  }
};

export default AuthHook;
