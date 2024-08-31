import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  const register = async (name, email, password) => {
    return await axios.post(`${import.meta.env.VITE_API}/user/register`, {
      name,
      email,
      password,
    });
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/user/login`,
        { email, password }
      );
      if (response?.status === 200) {
        setToken(response.data.token);
        setUser(response.data);
        localStorage.setItem("token", response.data.token);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // const logout = () => {
  //   setToken(null);
  //   localStorage.removeItem("token");
  // };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
