import type { CSSProperties as ReactCSSProperties } from 'react'

/**
 * Use a custom type for CSS properties becauase we should eventually write a more strongly typed version using template literal types.
 * This could definitely be contributed back to the community too. An example starting point here https://github.com/ghoullier/awesome-template-literal-types#css-parser
 * For example:
 * ```ts
 * type Font = {
 *   fontSize: `${number}rem`,
 *
 *  }
 * type HexDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F ;
 * type Color = `rgba(${number}, ${number}, ${number}, ${number}) | #${HexDigit}${HexDigit}${HexDigit}` // You get the point
 *
 * ```
 * */
type KaizenCSSProperties = ReactCSSProperties

type ColorValue = string
// Color values can be hex (#ffffff) or OKLCH (oklch(96.04% 0.0137 247.97))

/** 12-step color palette (010-950) using OKLCH format */
type ColorPalette12Step = {
  '010': ColorValue
  '050': ColorValue
  '100': ColorValue
  '200': ColorValue
  '300': ColorValue
  '400': ColorValue
  '500': ColorValue
  '600': ColorValue
  '700': ColorValue
  '800': ColorValue
  '900': ColorValue
  '950': ColorValue
}

export type TypographyFont = {
  fontFamily: KaizenCSSProperties['fontFamily']
  fontWeight: KaizenCSSProperties['fontWeight']
  fontSize: KaizenCSSProperties['fontSize']
  lineHeight: KaizenCSSProperties['lineHeight']
  letterSpacing: KaizenCSSProperties['letterSpacing']
  maxWidth?: KaizenCSSProperties['maxWidth']
}

export type TokenStructure = {
  border: {
    solid: {
      borderWidth: KaizenCSSProperties['borderWidth']
      borderRadius: KaizenCSSProperties['borderRadius']
      borderStyle: KaizenCSSProperties['borderStyle']
      borderColor: KaizenCSSProperties['borderColor']
    }
    dashed: {
      borderWidth: KaizenCSSProperties['borderWidth']
      borderRadius: KaizenCSSProperties['borderRadius']
      borderStyle: KaizenCSSProperties['borderStyle']
    }
    borderless: {
      borderWidth: KaizenCSSProperties['borderWidth']
      borderRadius: KaizenCSSProperties['borderRadius']
      borderStyle: KaizenCSSProperties['borderStyle']
      borderColor: KaizenCSSProperties['borderColor']
    }
    focusRing: {
      borderWidth: KaizenCSSProperties['borderWidth']
      borderRadius: KaizenCSSProperties['borderRadius']
      borderStyle: KaizenCSSProperties['borderStyle']
    }
    width: {
      1: KaizenCSSProperties['borderWidth']
    }
  }
  animation: {
    easingFunction: {
      easeInOut: string
      easeIn: string
      easeOut: string
      linear: string
      bounceIn: string
      bounceOut: string
      bounceInOut: string
    }
    duration: {
      instant: string
      immediate: string
      rapid: string
      fast: string
      slow: string
      deliberate: string
    }
  }
  color: {
    blue: ColorPalette12Step
    cyan: ColorPalette12Step
    green: ColorPalette12Step
    'grey-cool': ColorPalette12Step
    'grey-warm': ColorPalette12Step
    lime: ColorPalette12Step
    orange: ColorPalette12Step
    pink: ColorPalette12Step
    purple: ColorPalette12Step
    red: ColorPalette12Step
    yellow: ColorPalette12Step
    white: ColorValue
    black: ColorValue
  }
  dataViz: {
    favorable: ColorValue
    unfavorable: ColorValue
  }
  layout: {
    contentMaxWidth: string
    contentMaxWidthWithSidebar: string
    contentSideMargin: string
    mobileActionsDrawerHeight: string
    navigationBarHeight: string
    breakpoints: {
      medium: string
      large: string
    }
  }
  shadow: {
    small: {
      boxShadow: string
    }
    large: {
      boxShadow: string
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
    xxxl: string
    xxxxl: string
    xxxxxl: string
    0: string
    1: string
    2: string
    4: string
    6: string
    8: string
    12: string
    16: string
    20: string
    24: string
    32: string
    40: string
    48: string
    56: string
    64: string
    72: string
    80: string
    96: string
    112: string
    128: string
    160: string
    200: string
    240: string
    280: string
    320: string
  }
  typography: {
    dataLarge: TypographyFont
    dataLargeUnits: TypographyFont
    dataMedium: TypographyFont
    dataMediumUnits: TypographyFont
    dataSmall: TypographyFont
    dataSmallUnits: TypographyFont
    display0: TypographyFont
    heading1: TypographyFont
    heading2: TypographyFont
    heading3: TypographyFont
    heading4: TypographyFont
    heading5: TypographyFont
    heading6: TypographyFont
    paragraphIntroLede: TypographyFont
    paragraphBody: TypographyFont
    paragraphSmall: TypographyFont
    paragraphExtraSmall: TypographyFont
    paragraphBold: {
      fontWeight: KaizenCSSProperties['fontWeight']
    }
    buttonPrimary: TypographyFont
    buttonSecondary: TypographyFont
  }
}

// Converts all leafs (values that aren't objects) of an object tree to LeafType.
export type DeepMapObjectLeafs<T, LeafType> = T extends
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined
  | ((...params: any[]) => any)
  ? LeafType
  : T extends Record<any, any>
    ? {
        [Key in keyof T]: DeepMapObjectLeafs<T[Key], LeafType>
      }
    : T

/**
 * Apologies for the complex types.
 * This type represents the Theme type but with every leaf value in the tree mapped strictly to a string, rather than a number or a more complex type such as a string union.
 * The reason for this is to have a more accurate type for the generated hierarchy of design tokens which are represented as CSS custom properties, e.g. `var(--color-purple-800)`.
 */

export type CSSVariableTheme = DeepMapObjectLeafs<TokenStructure, string>
