import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";
import { IProviderProps } from "../interfaces/ProviderPropsInterface";
import { IThemeContextData } from "../interfaces/ThemeContextDataInterface";

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IProviderProps> = ({ children }) => {
  const [themeName, setThemeName ] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if(themeName === 'light') return LightTheme; 
    
    return DarkTheme; 
  }, [themeName]);

  return(
    <ThemeContext.Provider value = {{ themeName, toggleTheme }}>
      <ThemeProvider theme={ theme }>
        <Box width="100vw" height="100vh" bgcolor={ theme.palette.background.default }>
          { children }
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

