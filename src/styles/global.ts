import 'normalize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts?.regular || 'sans-serif'};
    background-color: ${({ theme }) => theme.colors?.Neutra?.light?.[1] || '#fff'};
    color: ${({ theme }) => theme.colors?.Neutra?.dark?.[1] || '#000'};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }

    *, *::before, *::after {
    box-sizing: border-box;
  }
`

export default GlobalStyle
