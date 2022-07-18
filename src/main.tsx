import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  </React.StrictMode>
)
