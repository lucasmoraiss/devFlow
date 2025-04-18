import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/redux/store.ts'
import { AuthProvider } from './app/Auth/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
      <App />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
