import 'styled-components'
import type { ITheme } from '../types/theme'

type ThemeType = ITheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
