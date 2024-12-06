import { TokenStructure } from '../types'

export const tokens: TokenStructure = {
  animation: {
    easingFunction: {
      easeInOut: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      easeIn: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      linear: 'linear',
      bounceIn: 'cubic-bezier(0.485, 0.155, 0.24, 1.245)',
      bounceOut: 'cubic-bezier(0.485, 0.155, 0.515, 0.845)',
      bounceInOut: 'cubic-bezier(0.76, -0.245, 0.24, 1.245)',
    },
    duration: {
      instant: '0ms',
      immediate: '100ms',
      rapid: '200ms',
      fast: '300ms',
      slow: '400ms',
      deliberate: '700ms',
    },
  },
  border: {
    solid: {
      borderWidth: '2px',
      borderRadius: '7px',
      borderStyle: 'solid',
      borderColor: '#e1e2ea',
    },
    dashed: {
      borderWidth: '2px',
      borderRadius: '7px',
      borderStyle: 'dashed',
    },
    borderless: {
      borderWidth: '2px',
      borderRadius: '7px',
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
    focusRing: {
      borderWidth: '2px',
      borderRadius: '10px',
      borderStyle: 'solid',
    },
    width: {
      1: '1px',
    },
  },
  color: {
    purple: {
      100: '#f4edf8',
      200: '#dfc9ea',
      300: '#c9a5dd',
      400: '#ae67b1',
      500: '#844587',
      600: '#5f3361',
      700: '#4a234d',
      800: '#2f2438',
    },
    blue: {
      100: '#e6f6ff',
      200: '#bde2f5',
      300: '#73c0e8',
      400: '#008bd6',
      500: '#0168b3',
      600: '#004970',
      700: '#003157',
    },
    green: {
      100: '#e8f8f4',
      200: '#c4ede2',
      300: '#8fdbc7',
      400: '#5dcaad',
      500: '#3f9a86',
      600: '#2c7d67',
      700: '#22594a',
    },
    yellow: {
      100: '#fff9e4',
      200: '#ffeeb3',
      300: '#ffe36e',
      400: '#ffca4d',
      500: '#ffb600',
      600: '#c68600',
      700: '#876400',
    },
    red: {
      100: '#fdeaee',
      200: '#f9c2cb',
      300: '#f597a8',
      400: '#e0707d',
      500: '#c93b55',
      600: '#a82433',
      700: '#6c1e20',
    },
    orange: {
      100: '#fff0e8',
      200: '#ffd1b9',
      300: '#ffb08a',
      400: '#ff9461',
      500: '#e96c2f',
      600: '#b74302',
      700: '#903c00',
    },
    gray: {
      100: '#f9f9f9',
      200: '#f4f4f5',
      300: '#eaeaec',
      400: '#cdcdd0',
      500: '#878792',
      600: '#524e56',
    },
    white: '#ffffff',
    black: '#000000',
  },
  dataViz: {
    favorable: '#7dd5bd',
    unfavorable: '#e68d97',
  },
  layout: {
    contentMaxWidth: '1392px',
    contentMaxWidthWithSidebar: '1080px',
    contentSideMargin: '72px',
    mobileActionsDrawerHeight: '60px',
    navigationBarHeight: '72px',
    breakpoints: {
      medium: '768px',
      large: '1080px',
    },
  },
  shadow: {
    small: {
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 16px 0 rgba(0, 0, 0, 0.06)',
    },
    large: {
      boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.1), 0 8px 40px 0 rgba(0, 0, 0, 0.08)',
    },
  },
  spacing: {
    xs: '0.375rem',
    sm: '0.75rem',
    md: '1.5rem',
    lg: '2.25rem',
    xl: '3rem',
    xxl: '3.75rem',
    xxxl: '4.5rem',
    xxxxl: '5.25rem',
    xxxxxl: '6rem',
    0: '0',
    1: '.0625rem',
    2: '.125rem',
    4: '.25rem',
    6: '.375rem',
    8: '.5rem',
    12: '.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    56: '3.5rem',
    64: '4rem',
    72: '4.5rem',
    80: '5rem',
    96: '6rem',
    112: '7rem',
    128: '8rem',
    160: '10rem',
    200: '12.5rem',
    240: '15rem',
    280: '17.5rem',
    320: '20rem',
  },
  typography: {
    dataLarge: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '5.25rem',
      lineHeight: '5.25rem',
      letterSpacing: 'normal',
    },
    dataLargeUnits: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '2.625rem',
      lineHeight: '5.25rem',
      letterSpacing: 'normal',
    },
    dataMedium: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: '5rem',
      letterSpacing: 'normal',
    },
    dataMediumUnits: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '5rem',
      letterSpacing: 'normal',
    },
    dataSmall: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
    dataSmallUnits: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
    display0: {
      fontFamily: '"Tiempos Headline", Georgia, serif',
      fontWeight: 800,
      fontSize: '4.5rem',
      lineHeight: '5.25rem',
      letterSpacing: '0em',
    },
    heading1: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '2.125rem',
      lineHeight: '2.625rem',
      letterSpacing: 'normal',
    },
    heading2: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
      letterSpacing: 'normal',
    },
    heading3: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: '1.875rem',
      letterSpacing: 'normal',
    },
    heading4: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
    heading5: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
    heading6: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
    paragraphIntroLede: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
      letterSpacing: '0',
      maxWidth: '975px',
    },
    paragraphBody: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
      maxWidth: '780px',
    },
    paragraphSmall: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      letterSpacing: 'normal',
      maxWidth: '680px',
    },
    paragraphExtraSmall: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: 'normal',
      maxWidth: '600px',
    },
    paragraphBold: {
      fontWeight: 600,
    },
    buttonPrimary: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
    buttonSecondary: {
      fontFamily: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    },
  },
}
