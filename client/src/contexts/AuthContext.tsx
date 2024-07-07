import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
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
  const { data } = useQuery<{ getUser: UserData }>(GET_USER);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(localStorage.getItem("isAuthenticated"))
  );
  const [userData, setUserData] = useState<UserData>(
    JSON.parse(localStorage.getItem("userData") || "{}")
  );

  useEffect(() => {
    if (data) {
      setUserData(data.getUser);
      setIsAuthenticated(true);
      localStorage.setItem("userData", JSON.stringify(data.getUser));
      localStorage.setItem("isAuthenticated", "true");
    }
  }, [data]);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData({});
  };

  const userLogin = (payload: UserData) => {
    setUserData(payload);
    localStorage.setItem("userData", JSON.stringify(payload));
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userData, userLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
