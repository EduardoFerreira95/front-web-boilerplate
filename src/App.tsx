import { Routes } from './Routes';
import { ThemeProvider } from './globalStyles';


function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
