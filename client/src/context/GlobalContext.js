import React, { createContext, useContext } from 'react';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GlobalContext.Provider value={{}}>
          {children}
        </GlobalContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
