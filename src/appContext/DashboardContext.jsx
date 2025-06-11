import React, { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [selected, setSelected] = useState('products');
    const [productId, setProductId] = useState(null);

  return (
    <DashboardContext.Provider value={{selected, setSelected, productId, setProductId}}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = ()=> useContext(DashboardContext);