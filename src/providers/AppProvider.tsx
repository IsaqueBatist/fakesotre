import { type ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import store from '../redux/store'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

const fallbackRender = ({ error }: { error: Error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{error.message}</pre>
  </div>
)

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ToastContainer />
          <GlobalStyle />
          {children}
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
