import { ThemeConfig } from "tailwindcss/types/config"
import { heartTheme } from "@kaizen/design-tokens/"
import { kzSpacing } from "./kz-spacing"

export type KaizenTailwindTheme = Partial<ThemeConfig>
export type KaizenTailwindPreset = {
  theme: KaizenTailwindTheme
}

// Note: changing any token will require to to run build:ts from the root `design-heartTheme`
export const kaizenTailwindTheme: KaizenTailwindTheme = {
  extend: {
    maxWidth: {
      paragraph: `${heartTheme.typography.paragraphBody.maxWidth}`,
      "paragraph-lede": `${heartTheme.typography.paragraphIntroLede.maxWidth}`,
      "paragraph-sm": `${heartTheme.typography.paragraphSmall.maxWidth}`,
      "paragraph-xs": `${heartTheme.typography.paragraphExtraSmall.maxWidth}`,
    },
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    inherit: "inherit",
    ...heartTheme.color,
    ...heartTheme.dataViz,
  },
  spacing: kzSpacing,
  boxShadow: {
    none: "none",
    sm: heartTheme.shadow.small.boxShadow,
    lg: heartTheme.shadow.large.boxShadow,
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
    "default-color": `${heartTheme.border.solid.borderColor}`,
    transparent: `${heartTheme.border.borderless.borderColor}`,
    "focus-ring": heartTheme.color.blue[600],
    ...heartTheme.color,
  },
  fontFamily: {
    "family-paragraph": [`${heartTheme.typography.paragraphBody.fontFamily}`],
    "family-heading": [`${heartTheme.typography.heading1.fontFamily}`],
    "family-data": [`${heartTheme.typography.dataLarge.fontFamily}`],
    "family-display": [`${heartTheme.typography.display0.fontFamily}`],
  },
  fontSize: {
    display: `${heartTheme.typography.display0.fontSize}`,
    "heading-1": `${heartTheme.typography.heading1.fontSize}`,
    "heading-2": `${heartTheme.typography.heading2.fontSize}`,
    "heading-3": `${heartTheme.typography.heading3.fontSize}`,
    "heading-4": `${heartTheme.typography.heading4.fontSize}`,
    "heading-5": `${heartTheme.typography.heading5.fontSize}`,
    "heading-6": `${heartTheme.typography.heading6.fontSize}`,
    paragraph: `${heartTheme.typography.paragraphBody.fontSize}`,
    "paragraph-lede": `${heartTheme.typography.paragraphIntroLede.fontSize}`,
    "paragraph-sm": `${heartTheme.typography.paragraphSmall.fontSize}`,
    "paragraph-xs": `${heartTheme.typography.paragraphExtraSmall.fontSize}`,
    "data-lg": `${heartTheme.typography.dataLarge.fontSize}`,
    "data-md": `${heartTheme.typography.dataMedium.fontSize}`,
    "data-sm": `${heartTheme.typography.dataSmall.fontSize}`,
    "data-units-lg": `${heartTheme.typography.dataLargeUnits.fontSize}`,
    "data-units-md": `${heartTheme.typography.dataMediumUnits.fontSize}`,
    "data-units-sm": `${heartTheme.typography.dataSmallUnits.fontSize}`,
  },
  fontWeight: {
    "weight-paragraph": "400",
    "weight-paragraph-bold": "600",
    "weight-data": "700",
    "weight-heading": "700",
    "weight-display": "800",
  },
  lineHeight: {
    display: `${heartTheme.typography.display0.lineHeight}`,
    "heading-1": `${heartTheme.typography.heading1.lineHeight}`,
    "heading-2": `${heartTheme.typography.heading2.lineHeight}`,
    "heading-3": `${heartTheme.typography.heading3.lineHeight}`,
    "heading-4": `${heartTheme.typography.heading4.lineHeight}`,
    "heading-5": `${heartTheme.typography.heading5.lineHeight}`,
    "heading-6": `${heartTheme.typography.heading6.lineHeight}`,
    paragraph: `${heartTheme.typography.paragraphBody.lineHeight}`,
    "paragraph-lede": `${heartTheme.typography.paragraphIntroLede.lineHeight}`,
    "paragraph-sm": `${heartTheme.typography.paragraphSmall.lineHeight}`,
    "paragraph-xs": `${heartTheme.typography.paragraphExtraSmall.lineHeight}`,
    "data-lg": `${heartTheme.typography.dataLarge.lineHeight}`,
    "data-md": `${heartTheme.typography.dataMedium.lineHeight}`,
    "data-sm": `${heartTheme.typography.dataSmall.lineHeight}`,
    "data-units-lg": `${heartTheme.typography.dataLargeUnits.lineHeight}`,
    "data-units-md": `${heartTheme.typography.dataMediumUnits.lineHeight}`,
    "data-units-sm": `${heartTheme.typography.dataSmallUnits.lineHeight}`,
  },
  letterSpacing: {
    "letter-spacing-normal": "normal",
  },
  // A mix of layout styles
  screens: {
    md: heartTheme.layout.breakpoints.medium, // => @media (min-width: 768px) { ... }
    lg: heartTheme.layout.breakpoints.large, // => @media (min-width: 1080px) { ... }
  },
}

export const Preset: KaizenTailwindPreset = {
  theme: kaizenTailwindTheme,
}
