import { ThemeConfig } from "tailwindcss/types/config"
import { defaultTheme } from "@kaizen/design-tokens"
import { kzHeight } from "./kz-height"
import { kzSpacing } from "./kz-spacing"
import { kzWidth } from "./kz-width"

export type KaizenTailwindTheme = Partial<ThemeConfig>
export interface KaizenTailwindPreset {
  theme: KaizenTailwindTheme
}

// Note: changing any token will require to to run build:ts from the root `design-tokens`
export const kaizenTailwindTheme: KaizenTailwindTheme = {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    inherit: "inherit",
    ...defaultTheme.color,
    ...defaultTheme.dataViz,
  },
  spacing: kzSpacing,
  boxShadow: {
    none: "none",
    sm: defaultTheme.shadow.small.boxShadow,
    lg: defaultTheme.shadow.large.boxShadow,
  },
  borderRadius: {
    default: "7px",
    none: "0px",
    "focus-ring": "10px",
    full: "100%",
  },

  borderWidth: {
    "w-none": "0px",
    "w-default": "2px",
    "w-focus-ring": "2px",
  },
  borderColor: {
    "default-color": `${defaultTheme.border.solid.borderColor}`,
    transparent: `${defaultTheme.border.borderless.borderColor}`,
    "focus-ring": defaultTheme.color.blue[600],
    ...defaultTheme.color,
  },
  fontFamily: {
    "family-paragraph": [`${defaultTheme.typography.paragraphBody.fontFamily}`],
    "family-heading": [`${defaultTheme.typography.heading1.fontFamily}`],
    "family-data": [`${defaultTheme.typography.dataLarge.fontFamily}`],
    "family-display": [`${defaultTheme.typography.display0.fontFamily}`],
  },
  fontSize: {
    display: `${defaultTheme.typography.display0.fontSize}`,
    "heading-1": `${defaultTheme.typography.heading1.fontSize}`,
    "heading-2": `${defaultTheme.typography.heading2.fontSize}`,
    "heading-3": `${defaultTheme.typography.heading3.fontSize}`,
    "heading-4": `${defaultTheme.typography.heading4.fontSize}`,
    "heading-5": `${defaultTheme.typography.heading5.fontSize}`,
    "heading-6": `${defaultTheme.typography.heading6.fontSize}`,
    paragraph: `${defaultTheme.typography.paragraphBody.fontSize}`,
    "paragraph-lede": `${defaultTheme.typography.paragraphIntroLede.fontSize}`,
    "paragraph-sm": `${defaultTheme.typography.paragraphSmall.fontSize}`,
    "paragraph-xs": `${defaultTheme.typography.paragraphExtraSmall.fontSize}`,
    "data-lg": `${defaultTheme.typography.dataLarge.fontSize}`,
    "data-md": `${defaultTheme.typography.dataMedium.fontSize}`,
    "data-sm": `${defaultTheme.typography.dataSmall.fontSize}`,
    "data-units-lg": `${defaultTheme.typography.dataLargeUnits.fontSize}`,
    "data-units-md": `${defaultTheme.typography.dataMediumUnits.fontSize}`,
    "data-units-sm": `${defaultTheme.typography.dataSmallUnits.fontSize}`,
  },
  fontWeight: {
    "weight-paragraph": "400",
    "weight-paragraph-bold": "600",
    "weight-data": "700",
    "weight-heading": "700",
    "weight-display": "800",
  },
  lineHeight: {
    display: `${defaultTheme.typography.display0.lineHeight}`,
    "heading-1": `${defaultTheme.typography.heading1.lineHeight}`,
    "heading-2": `${defaultTheme.typography.heading2.lineHeight}`,
    "heading-3": `${defaultTheme.typography.heading3.lineHeight}`,
    "heading-4": `${defaultTheme.typography.heading4.lineHeight}`,
    "heading-5": `${defaultTheme.typography.heading5.lineHeight}`,
    "heading-6": `${defaultTheme.typography.heading6.lineHeight}`,
    paragraph: `${defaultTheme.typography.paragraphBody.lineHeight}`,
    "paragraph-lede": `${defaultTheme.typography.paragraphIntroLede.lineHeight}`,
    "paragraph-sm": `${defaultTheme.typography.paragraphSmall.lineHeight}`,
    "paragraph-xs": `${defaultTheme.typography.paragraphExtraSmall.lineHeight}`,
    "data-lg": `${defaultTheme.typography.dataLarge.lineHeight}`,
    "data-md": `${defaultTheme.typography.dataMedium.lineHeight}`,
    "data-sm": `${defaultTheme.typography.dataSmall.lineHeight}`,
    "data-units-lg": `${defaultTheme.typography.dataLargeUnits.lineHeight}`,
    "data-units-md": `${defaultTheme.typography.dataMediumUnits.lineHeight}`,
    "data-units-sm": `${defaultTheme.typography.dataSmallUnits.lineHeight}`,
  },
  letterSpacing: {
    "letter-spacing-normal": "normal",
  },
  // A mix of layout styles
  maxWidth: kzWidth,
  width: kzWidth,
  maxHeight: kzHeight,
  height: kzHeight,
  screens: {
    md: defaultTheme.layout.breakpoints.medium, // => @media (min-width: 768px) { ... }
    lg: defaultTheme.layout.breakpoints.large, // => @media (min-width: 1080px) { ... }
    "md-max": { max: defaultTheme.layout.breakpoints.medium }, // => @media (max-width: 768px) { ... }
    "lg-max": { max: defaultTheme.layout.breakpoints.large }, // => @media (min-width: 1080px) { ... }
  },
  // TODO: These work in TW Play but not in our Storybook config.
  //        Add these when we get them working in Storybook.
  // ringWidth: {
  //   "default-width": `${defaultTheme.border.focusRing.borderWidth}`,
  // },
  // ringOffsetWidth: {
  //   "default-width": "2px",
  // },
  // ringColor: {
  //   "default-color": `${defaultTheme.color.blue[500]}`,
  // },
  // ringOffsetColor: {},
}

export const Preset: KaizenTailwindPreset = {
  theme: kaizenTailwindTheme,
}
