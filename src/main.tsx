import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import { App } from './App'
import GlobalStyle from './styles/Global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
      <GlobalStyle />
    </ThemeContextProvider>
  </React.StrictMode>
)
