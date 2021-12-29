import { Outlet, Navigate } from "react-router";
const MySpace = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default MySpace;
