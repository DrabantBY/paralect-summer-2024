import { createTheme } from '@mantine/core';

const theme = createTheme({
  white: '#FFFFFF',
  black: '#232134',
  colors: {
    gray: [
      '#f3f3fe',
      '#F5F5F6',
      '#EAEBED',
      '#D5D6DC',
      '#ACADB9',
      '#7B7C88',
      '#767c91',
      '#656a7e',
      '#585e72',
      '#4a5167',
    ],
    purple: [
      '#f3edff',
      '#F2ECFA',
      '#E5D5FA',
      '#D1B4F8',
      '#BD93F7',
      '#9854F6',
      '#541F9D',
      '#4f23c0',
      '#451eac',
      '#3a1899',
    ],
  },
  primaryColor: 'purple',
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  spacing: {
    xl: '1.5rem',
  },
});

export default theme;
