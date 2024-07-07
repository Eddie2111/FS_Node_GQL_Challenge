import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/mutations/users/index";

interface UserData {
  id?: number;
  name?: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userData: UserData;
  userLogin: (payload: UserData) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useQuery(GET_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData>({});

  useEffect(() => {
    if (data) {
      setUserData(data.getUser);
      setIsAuthenticated(true);
    }
    },[data, loading, error]);
    
  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setUserData({});
  };
  const userLogin = (payload: UserData) => setUserData(payload);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userData, userLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
