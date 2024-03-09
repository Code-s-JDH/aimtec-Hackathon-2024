import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage(true, false);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.style.setProperty('--main_color', theme === 'dark' ? '' : 'var(--main_color_dark)');
        document.documentElement.style.setProperty('--primary_color', theme === 'dark' ? '' : 'var(--primary_color_dark)');
        document.documentElement.style.setProperty('--secondary_color', theme === 'dark' ? '' : 'var(--secondary_color_dark)');
        document.documentElement.style.setProperty('--active_color', theme === 'dark' ? '' : 'var(--active_color_dark)');
        document.documentElement.style.setProperty('--border_color', theme === 'dark' ? '' : 'var(--border_color_dark)');
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeContextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
