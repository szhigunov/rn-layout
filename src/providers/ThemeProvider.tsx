import React, {createContext} from 'react';

type themes = 'light' | 'dark' | 'defaults';

export interface IThemeStyles {
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
  margin?: number;
  borderWidth?: number;
  borderColor?: string;
}

type IThemeStyleList = {[key in themes]: IThemeStyles};

export interface ITheme {
  theme: themes;
  styles: IThemeStyleList;
}

const defaultStyles: IThemeStyles = {
  padding: 8,
  margin: 0,
  borderRadius: 0,
  borderWidth: 0,
};

const initialContext: ITheme = {
  theme: 'light',
  styles: {
    defaults: defaultStyles,
    light: {
      ...defaultStyles,
      backgroundColor: '#fff',
      borderColor: '#000',
    },
    dark: {
      ...defaultStyles,
      backgroundColor: '#000',
      borderColor: '#fff',
    },
  },
};

export const ThemeContext: React.Context<ITheme> = createContext(
  initialContext,
);

export const ThemeProvider: React.FC = ({children}) => (
  <ThemeContext.Provider value={initialContext}>
    {children}
  </ThemeContext.Provider>
);
