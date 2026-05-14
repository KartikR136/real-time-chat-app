import { createContext, useEffect, useState } from "react";
import {
  getCurrentUser,
  loginUser,
  registerUser
} from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const res = await loginUser(credentials);

    localStorage.setItem("chat_token", res.data.token);

    setUser(res.data.user);
  };

  const register = async (data) => {
    const res = await registerUser(data);

    localStorage.setItem("chat_token", res.data.token);

    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("chat_token");
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};