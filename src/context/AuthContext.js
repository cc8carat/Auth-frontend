import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signup = async (formData) => {
    try {
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_BLOG_API}/auth/signup`,
        formData
      );
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
