import { ThemeProvider } from "styled-components";
import Header from "../header/Header";
import { theme } from "../../styles/theme";
import GlobalStyle from "../../styles/global";

export default function Layout({children}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            {children}
        </ThemeProvider>
  )
}
