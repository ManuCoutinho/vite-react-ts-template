import 'styled-components'

//edit file

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    title: string
    colors: {
      black: string
      white: string
      background: string
      body: string
      primary: string
      secondary: string
      text: string
      title: string
      info: string
      highlight: string

      bg_card: string
      glass: string
      bg_modal: string
      disabled: string
    }
    font: {
      text: string
      title: string
    }
    fontSize: {
      xsm: string
      sm: string
      md: string
      lg: string
      xl: string
      xlg: string
    }
    fontWeight: {
      light: number
      normal: number
      semibold: number
      bold: number
    }
    transition: string
    radius: {
      sm: string
      normal: string
      md: string
      full: string
    }
  }

  export interface CustomTheme {
    title: string
    colors: {
      black: string
      white: string
      background: string
      body: string
      primary: string
      secondary: string
      text: string
      title: string
      info: string
      highlight: string
      bg_card: string
      glass: string
      bg_modal: string
      disabled: string
    }
  }
}
