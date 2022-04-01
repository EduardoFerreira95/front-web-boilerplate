import { ThemeProvider } from './globalStyles';

export function Providers({ children }: {children: JSX.Element | JSX.Element[]}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
