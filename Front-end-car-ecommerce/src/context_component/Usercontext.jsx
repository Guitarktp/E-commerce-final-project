import { createContext, useState, useEffect } from 'react';
import {jwtDecode} from "jwt-decode";
import { getUserById } from "../components/API/API_Users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          const API = await getUserById(decodedToken.id);
          setUser(API);
        }
      } catch (error) {
        console.error("Error decoding token or fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
