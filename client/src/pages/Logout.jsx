import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const Logout = () => {

    const {LogoutUser} = useAuth();
    
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  // window.location.reload();
  return <Navigate to ="/login" />;
};
