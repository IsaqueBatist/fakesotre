interface ThemeColorsScale {
  main: string
  light: string
  medium: string
  dark: string
  darkest: string
}

interface ThemeNeutralScale {
  light: {
    1: string
    2: string
    3: string
    4: string
    5: string
  }
  dark: {
    1: string
    2: string
    3: string
    4: string
    5: string
  }
}

interface ThemeColors {
  primary: ThemeColorsScale
  seconday: ThemeColorsScale
  tertiary: ThemeColorsScale
  Complementary: ThemeColorsScale
  Neutra: ThemeNeutralScale
}

interface ThemeFonts {
  regular: string
  heading: string
}

export interface ITheme {
  colors: ThemeColors
  fonts: ThemeFonts
  borderRadius: string
  spacing: (factor?: number) => string
}
