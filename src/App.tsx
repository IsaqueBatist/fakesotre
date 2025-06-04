import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <h1>Fake store API</h1>
    </ThemeProvider>
  )
}

export default App
