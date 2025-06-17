import type { ITheme } from "../types/theme";

export const theme: ITheme = {
    colors: {
      primary: {
        main: '#F79326',
        light: '#FFBF79',
        medium: '#FFAB50',
        dark: '#D07007',
        darkest: '#A45500'
      },
      seconday: {
        main: '#F7BB26',
        light: '#FFD879',
        medium: '#FFCC50',
        dark: '#D09607',
        darkest: '#A47500'
      },
      tertiary: {
        main: '#F74A26',
        light: '#FF9079',
        medium: '#FF6E50',
        dark: '#D02A07',
        darkest: '#A41C00'
      },
      Complementary: {
        main: '#1D789B',
        light: '#5FA5C0',
        medium: '#3989A7',
        dark: '#0A6283',
        darkest: '#044C67'
      },
      Neutra: {
        light: {
          1: '#F8F9FA',
          2: '#E9ECEF',
          3: '#DEE2E6',
          4: '#CED4DA',
          5: '#ADB5BD'
        },
        dark: {
          1: '#212529',
          2: '#343A40',
          3: '#495057',
          4: '#6C757D',
          5: '#919BA3'
        }
      }
    },
    fonts: {
      regular: 'Inter, sans-serif',
      heading: 'Poppins, sans-serif'
    },
    borderRadius: '8px',
    spacing: (factor?: number) => `${factor} * 8px`
}