import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API}/user/profile`
          );
          setUser(response.data); // Set user data
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };

      fetchUser();
    } else {
      setLoading(false); // Stop loading even if there's no token
    }
  }, []);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   } else {
  //     const fetchUser = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${import.meta.env.VITE_API}/user/profile`
  //         );
  //         setUser(response.data); // Set user data
  //       } catch (error) {
  //         console.error("Failed to fetch user data:", error);
  //       }
  //     };

  //     fetchUser();
  //   }
  // }, []);

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
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // const logout = () => {
  //   setToken(null);
  //   localStorage.removeItem("token");
  // };

  return (
    <AuthContext.Provider
      value={{ user, setUser, register, login, setToken, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
