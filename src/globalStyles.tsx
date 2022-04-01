import { useContext, createContext, useState } from 'react';

import { createGlobalStyle, ThemeProvider as Provider } from 'styled-components';

type Theme = {
  background: string;
  primary: string;
  secondary: string;
  third: string;
  buttonLabel: string;
}

type Props = {
  children: JSX.Element | JSX.Element[];
}

type ThemeMode = 'light' | 'dark';

type ThemeContext = {
  handleThemeMode: () => void;
}

type CreateGlobalStyle = {
  theme: Theme;
}

function makeTheme(theme: ThemeMode): Theme {
  return theme === 'light' ? {
    background: '#F2F2F2',
    primary: '#1E0E62',
    secondary: '#25DAC5',
    third: '#E93A7D',
    buttonLabel: '#F2F2F2',
  } : {
    background: '#1E0E62',
    primary: '#F2F2F2',
    secondary: '#482BE7',
    third: '#E93A7D',
    buttonLabel: '#F2F2F2',
  }
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.50s linear;
  }
  body {
    background: ${(props: CreateGlobalStyle) => props.theme.background};
    color: ${(props: CreateGlobalStyle) => props.theme.primary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }

  button {
    background: ${({ theme }: CreateGlobalStyle) => theme.secondary};
    color: ${({ theme }: CreateGlobalStyle) => theme.buttonLabel};
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 100px;
  }
`;

const ThemeContext = createContext({} as ThemeContext);

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeMode>('light');
  function handleThemeMode(): void {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <ThemeContext.Provider value={{ handleThemeMode }}>
      <Provider theme={makeTheme(theme)}>
        <GlobalStyles />
        {children}
      </Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeConsumer = ThemeContext.Consumer;