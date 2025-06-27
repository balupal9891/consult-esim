import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('esim-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const setUserInContext = (userData) => {
    // console.log(userData)
    setUser(userData.data.profile);
    localStorage.setItem('esim-user', JSON.stringify(userData.data.profile));
    localStorage.setItem('esim-accessToken', JSON.stringify(userData.data.accessToken));
    localStorage.setItem('esim-refreshToken', JSON.stringify(userData.data.refreshToken));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updates) => {
    setUser((prevUser) => {
      const updated = { ...prevUser, ...updates };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, setUserInContext, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};