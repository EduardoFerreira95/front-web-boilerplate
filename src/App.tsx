
import { Routes } from './Routes';
import { ThemeProvider, ThemeConsumer } from './globalStyles';

function App() {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {props => (
          <>
            <button onClick={props.handleThemeMode}>Click</button>
            <Routes />
          </>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  )
}

export default App
