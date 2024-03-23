import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token; //if token exist then true else false

  console.log("Is Logged in -> ", isLoggedIn);

  //tackle the logout

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authCountextvalue = useContext(AuthContext);

  if (!authCountextvalue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authCountextvalue;
};
