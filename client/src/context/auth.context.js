import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const jwtToken = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null;
  const [token, setToken] = useState(jwtToken);
  const value = {
    isAuthenticated: token ? true:false,
    token,
    setToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
