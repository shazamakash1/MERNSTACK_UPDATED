import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const URL = "http://localhost:5000/api/auth/user";

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const authorizationToken = `Bearer ${token}`;
  const storeToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token; //if token exist then true else false

  // console.log("Is Logged in -> ", isLoggedIn);

  //tackle the logout

  const LogoutUser = () => {
    setToken("");
    window.location.reload();
    return localStorage.removeItem("token");
  };

  //JWT Authentication - To get the currently logged in user Data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("user data->", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error Fetching Data ", error);
    }
  };

  //to fetch the services data from the db
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
        // console.log(data.msg);
      }
    } catch (error) {
      console.log(`Services frontend Error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authCountextvalue = useContext(AuthContext);

  if (!authCountextvalue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authCountextvalue;
};
