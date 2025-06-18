import { createRoot } from 'react-dom/client'

import AppProvider from './providers/AppProvider.tsx'
import AppRoutes from './routes/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <AppRoutes />
  </AppProvider>
)
