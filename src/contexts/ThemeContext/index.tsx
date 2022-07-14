import { createContext, useState, ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { parseCookies, setCookie } from 'nookies'

import { ThemeType } from './types'
import { combineTheme, light, dark } from '../../styles/theme'
import GlobalStyle from '../../styles/Global'

export const ThemeContext = createContext<ThemeType>({} as ThemeType)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const cookies = parseCookies()

  const userTheme = cookies.theme === 'dark' ? dark : light

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(userTheme))

  function toggleTheme() {
    if (theme.title === 'dark') {
      setCookie(null, 'theme', 'light', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, //30days
        sameSite: true
      })
      return setTheme(combineTheme(light))
    }
    if (theme.title === 'light') {
      setCookie(null, 'theme', 'dark', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, //30days
        sameSite: true
      })
      return setTheme(combineTheme(dark))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
