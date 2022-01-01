import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const MySpace = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default MySpace;
