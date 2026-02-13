import { createTheme, type MantineColorsTuple } from '@mantine/core';

// Define custom colors from Palette 4
const brandBlue: MantineColorsTuple = [
  '#EFF6FF',
  '#DBEAFE',
  '#BFDBFE',
  '#93C5FD',
  '#60A5FA',
  '#3B82F6',
  '#2563EB',
  '#1D4ED8',
  '#1E40AF',
  '#1E3A8A'
];

const brandPurple: MantineColorsTuple = [
  '#FAF5FF',
  '#F3E8FF',
  '#E9D5FF',
  '#D8B4FE',
  '#C084FC',
  '#A855F7',
  '#9333EA',
  '#7E22CE',
  '#6B21A8',
  '#581C87'
];

const brandTeal: MantineColorsTuple = [
  '#F0FDFA',
  '#CCFBF1',
  '#99F6E4',
  '#5EEAD4',
  '#2DD4BF',
  '#14B8A6',
  '#0D9488',
  '#0F766E',
  '#115E59',
  '#134E4A'
];

export const theme = createTheme({
  // Set primary color
  primaryColor: 'brandBlue',
  
  // Add custom colors
  colors: {
    brandBlue,
    brandPurple,
    brandTeal,
  },

  // Default font settings
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '48px', lineHeight: '1.2' },
      h2: { fontSize: '36px', lineHeight: '1.3' },
      h3: { fontSize: '28px', lineHeight: '1.4' },
      h4: { fontSize: '24px', lineHeight: '1.5' },
      h5: { fontSize: '20px', lineHeight: '1.5' },
      h6: { fontSize: '16px', lineHeight: '1.5' },
    },
  },

  // Default component styles
  components: {
    Button: {
      defaultProps: {
        color: 'brandBlue', // All buttons will use brand blue by default
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        shadow: 'sm',
        radius: 'md',
        withBorder: true,
      },
    },
    Title: {
      defaultProps: {
        c: '#050505', // Default title color (charcoal)
      },
    },
    Text: {
      defaultProps: {
        c: '#090909', // Default text color (medium gray)
      },
    },
  },

  // Color scheme
  white: '#FFFFFF',
  black: '#18181B',

  // Other theme settings
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
});