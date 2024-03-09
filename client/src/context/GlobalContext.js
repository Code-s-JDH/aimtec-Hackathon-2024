import React, { createContext, useContext } from 'react';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import { TranslatorProvider } from './TranslatorContext';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <TranslatorProvider>
          <GlobalContext.Provider value={{}}>
            {children}
          </GlobalContext.Provider>
        </TranslatorProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
