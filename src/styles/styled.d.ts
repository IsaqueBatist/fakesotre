import 'styled-components';
import { theme } from './theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
