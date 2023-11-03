import { ThemeConfig } from "tailwindcss/types/config"
import { tokens } from "@kaizen/design-tokens/js"
import { kzSpacing } from "./kz-spacing"

export type KaizenTailwindTheme = Partial<ThemeConfig>
export type KaizenTailwindPreset = {
  theme: KaizenTailwindTheme
}

// Note: changing any token will require to to run build:ts from the root `design-tokens`
export const kaizenTailwindTheme: KaizenTailwindTheme = {
  extend: {
    maxWidth: {
      paragraph: `${tokens.typography.paragraphBody.maxWidth}`,
      "paragraph-lede": `${tokens.typography.paragraphIntroLede.maxWidth}`,
      "paragraph-sm": `${tokens.typography.paragraphSmall.maxWidth}`,
      "paragraph-xs": `${tokens.typography.paragraphExtraSmall.maxWidth}`,
    },
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    inherit: "inherit",
    ...tokens.color,
    ...tokens.dataViz,
  },
  spacing: kzSpacing,
  boxShadow: {
    none: "none",
    sm: tokens.shadow.small.boxShadow,
    lg: tokens.shadow.large.boxShadow,
  },
  borderRadius: {
    DEFAULT: "7px",
    none: "0px",
    "focus-ring": "10px",
    full: "100%",
  },

  borderWidth: {
    DEFAULT: "2px",
    none: "0px",
    "focus-ring": "2px",
  },
  borderColor: {
    DEFAULT: `${tokens.border.solid.borderColor}`,
    transparent: `${tokens.border.borderless.borderColor}`,
    "focus-ring": tokens.color.blue[600],
    ...tokens.color,
  },
  fontFamily: {
    "family-paragraph": [`${tokens.typography.paragraphBody.fontFamily}`],
    "family-heading": [`${tokens.typography.heading1.fontFamily}`],
    "family-data": [`${tokens.typography.dataLarge.fontFamily}`],
    "family-display": [`${tokens.typography.display0.fontFamily}`],
  },
  fontSize: {
    display: `${tokens.typography.display0.fontSize}`,
    "heading-1": `${tokens.typography.heading1.fontSize}`,
    "heading-2": `${tokens.typography.heading2.fontSize}`,
    "heading-3": `${tokens.typography.heading3.fontSize}`,
    "heading-4": `${tokens.typography.heading4.fontSize}`,
    "heading-5": `${tokens.typography.heading5.fontSize}`,
    "heading-6": `${tokens.typography.heading6.fontSize}`,
    paragraph: `${tokens.typography.paragraphBody.fontSize}`,
    "paragraph-lede": `${tokens.typography.paragraphIntroLede.fontSize}`,
    "paragraph-sm": `${tokens.typography.paragraphSmall.fontSize}`,
    "paragraph-xs": `${tokens.typography.paragraphExtraSmall.fontSize}`,
    "data-lg": `${tokens.typography.dataLarge.fontSize}`,
    "data-md": `${tokens.typography.dataMedium.fontSize}`,
    "data-sm": `${tokens.typography.dataSmall.fontSize}`,
    "data-units-lg": `${tokens.typography.dataLargeUnits.fontSize}`,
    "data-units-md": `${tokens.typography.dataMediumUnits.fontSize}`,
    "data-units-sm": `${tokens.typography.dataSmallUnits.fontSize}`,
  },
  fontWeight: {
    "weight-paragraph": "400",
    "weight-paragraph-bold": "600",
    "weight-data": "700",
    "weight-heading": "700",
    "weight-display": "800",
  },
  lineHeight: {
    display: `${tokens.typography.display0.lineHeight}`,
    "heading-1": `${tokens.typography.heading1.lineHeight}`,
    "heading-2": `${tokens.typography.heading2.lineHeight}`,
    "heading-3": `${tokens.typography.heading3.lineHeight}`,
    "heading-4": `${tokens.typography.heading4.lineHeight}`,
    "heading-5": `${tokens.typography.heading5.lineHeight}`,
    "heading-6": `${tokens.typography.heading6.lineHeight}`,
    paragraph: `${tokens.typography.paragraphBody.lineHeight}`,
    "paragraph-lede": `${tokens.typography.paragraphIntroLede.lineHeight}`,
    "paragraph-sm": `${tokens.typography.paragraphSmall.lineHeight}`,
    "paragraph-xs": `${tokens.typography.paragraphExtraSmall.lineHeight}`,
    "data-lg": `${tokens.typography.dataLarge.lineHeight}`,
    "data-md": `${tokens.typography.dataMedium.lineHeight}`,
    "data-sm": `${tokens.typography.dataSmall.lineHeight}`,
    "data-units-lg": `${tokens.typography.dataLargeUnits.lineHeight}`,
    "data-units-md": `${tokens.typography.dataMediumUnits.lineHeight}`,
    "data-units-sm": `${tokens.typography.dataSmallUnits.lineHeight}`,
  },
  letterSpacing: {
    "letter-spacing-normal": "normal",
  },
  // A mix of layout styles
  screens: {
    md: tokens.layout.breakpoints.medium, // => @media (min-width: 768px) { ... }
    lg: tokens.layout.breakpoints.large, // => @media (min-width: 1080px) { ... }
  },
}

export const Preset: KaizenTailwindPreset = {
  theme: kaizenTailwindTheme,
}
