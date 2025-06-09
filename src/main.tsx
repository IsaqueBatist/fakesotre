import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.tsx'

function fallbackRender({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary
  fallbackRender={fallbackRender}
>
  <App />
</ErrorBoundary>
)
