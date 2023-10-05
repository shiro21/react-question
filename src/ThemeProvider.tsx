import React, { ReactNode, createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./item/theme";

interface ThemeProviderProps {
    children: ReactNode
};

type ThemeContextType = {
    theme: object;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) throw new Error("Theme Error");

    return context;
}