import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const URL = "http://localhost:5000/api/auth/user";

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
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

  //JWT Authentication - To get the currently logged in user Data

  const userAuthentication = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("user data->", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error Fetching Data ", error);
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn, user }}>
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
