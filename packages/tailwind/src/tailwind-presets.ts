import { ThemeConfig } from "tailwindcss/types/config"
import { defaultTheme } from "@kaizen/design-tokens"
import { kzSpacing } from "./kz-spacing"

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
  spacing: {
    ...kzSpacing,
  },
  boxShadow: {
    none: "none",
    sm: defaultTheme.shadow.small.boxShadow,
    lg: defaultTheme.shadow.large.boxShadow,
  },
  borderRadius: {
    DEFAULT: "7px",
    none: "0px",
    "focus-ring": "10px",
    full: "100%",
  },
  borderWidth: {
    "width-none": "0px",
    "width-default": "2px",
    "width-focus-ring": "2px",
  },
  // how do we want to handle our focus rings?
  // tailwind used a `ring` property
  borderColor: {
    "color-solid": `${defaultTheme.border.solid.borderColor}`,
    "color-transparent": `${defaultTheme.border.borderless.borderColor}`,
    "color-focus-ring": defaultTheme.color.blue[600],
    ...defaultTheme.color,
  },
  fontFamily: {
    "family-paragraph": [`${defaultTheme.typography.paragraphBody.fontFamily}`],
    "family-heading": [`${defaultTheme.typography.heading1.fontFamily}`],
    "family-data": [`${defaultTheme.typography.dataLarge.fontFamily}`],
    "family-display": [`${defaultTheme.typography.display0.fontFamily}`],
  },
  fontSize: {
    "size-display": `${defaultTheme.typography.display0.fontSize}`,
    "size-heading-1": `${defaultTheme.typography.heading1.fontSize}`,
    "size-heading-2": `${defaultTheme.typography.heading2.fontSize}`,
    "size-heading-3": `${defaultTheme.typography.heading3.fontSize}`,
    "size-heading-4": `${defaultTheme.typography.heading4.fontSize}`,
    "size-heading-5": `${defaultTheme.typography.heading5.fontSize}`,
    "size-heading-6": `${defaultTheme.typography.heading6.fontSize}`,
    "size-paragraph": `${defaultTheme.typography.paragraphBody.fontSize}`,
    "size-paragraph-lede": `${defaultTheme.typography.paragraphIntroLede.fontSize}`,
    "size-paragraph-sm": `${defaultTheme.typography.paragraphSmall.fontSize}`,
    "size-paragraph-xs": `${defaultTheme.typography.paragraphExtraSmall.fontSize}`,
    "size-data-lg": `${defaultTheme.typography.dataLarge.fontSize}`,
    "size-data-md": `${defaultTheme.typography.dataMedium.fontSize}`,
    "size-data-sm": `${defaultTheme.typography.dataSmall.fontSize}`,
    "size-data-units-lg": `${defaultTheme.typography.dataLargeUnits.fontSize}`,
    "size-data-units-md": `${defaultTheme.typography.dataMediumUnits.fontSize}`,
    "size-data-units-sm": `${defaultTheme.typography.dataSmallUnits.fontSize}`,
  },
  fontWeight: {
    "weight-paragraph": "400",
    "weight-paragraph-bold": "600",
    "weight-data": "700",
    "weight-heading": "700",
    "weight-display": "800",
  },
  lineHeight: {
    "height-display": `${defaultTheme.typography.display0.lineHeight}`,
    "height-heading-1": `${defaultTheme.typography.heading1.lineHeight}`,
    "height-heading-2": `${defaultTheme.typography.heading2.lineHeight}`,
    "height-heading-3": `${defaultTheme.typography.heading3.lineHeight}`,
    "height-heading-4": `${defaultTheme.typography.heading4.lineHeight}`,
    "height-heading-5": `${defaultTheme.typography.heading5.lineHeight}`,
    "height-heading-6": `${defaultTheme.typography.heading6.lineHeight}`,
    "height-paragraph": `${defaultTheme.typography.paragraphBody.lineHeight}`,
    "height-paragraph-lede": `${defaultTheme.typography.paragraphIntroLede.lineHeight}`,
    "height-paragraph-sm": `${defaultTheme.typography.paragraphSmall.lineHeight}`,
    "height-paragraph-xs": `${defaultTheme.typography.paragraphExtraSmall.lineHeight}`,
    "height-data-lg": `${defaultTheme.typography.dataLarge.lineHeight}`,
    "height-data-md": `${defaultTheme.typography.dataMedium.lineHeight}`,
    "height-data-sm": `${defaultTheme.typography.dataSmall.lineHeight}`,
    "height-data-units-lg": `${defaultTheme.typography.dataLargeUnits.lineHeight}`,
    "height-data-units-md": `${defaultTheme.typography.dataMediumUnits.lineHeight}`,
    "height-data-units-sm": `${defaultTheme.typography.dataSmallUnits.lineHeight}`,
  },
  letterSpacing: {
    "letter-spacing-normal": "normal",
  },
  // A mix of layout styles
  maxWidth: {
    "w-0": "0",
    "w-25": "25%",
    "w-50": "25%",
    "w-75": "75%",
    "w-100": "100%",
    "w-auto": "auto",
    "w-min": "min-content",
    "w-max": "max-content",
    "w-fit": "fit-content",
  },
  width: {
    "w-0": "0",
    "w-25": "25%",
    "w-50": "25%",
    "w-75": "75%",
    "w-100": "100%",
    "w-auto": "auto",
    "w-min": "min-content",
    "w-max": "max-content",
    "w-fit": "fit-content",
  },
  maxHeight: {
    "h-0": "0",
    "h-25": "25%",
    "h-50": "25%",
    "h-75": "75%",
    "h-100": "100%",
    "h-auto": "auto",
    "h-min": "min-content",
    "h-max": "max-content",
    "h-fit": "fit-content",
  },
  height: {
    "h-0": "0",
    "h-25": "25%",
    "h-50": "25%",
    "h-75": "75%",
    "h-100": "100%",
    "h-auto": "auto",
    "h-min": "min-content",
    "h-max": "max-content",
    "h-fit": "fit-content",
  },
  screens: {
    md: defaultTheme.layout.breakpoints.medium, // => @media (min-width: 768px) { ... }
    lg: defaultTheme.layout.breakpoints.large, // => @media (min-width: 1080px) { ... }
    "md-max": { max: defaultTheme.layout.breakpoints.medium }, // => @media (max-width: 768px) { ... }
    "lg-max": { max: defaultTheme.layout.breakpoints.large }, // => @media (min-width: 1080px) { ... }
  },
}

export const Preset: KaizenTailwindPreset = {
  theme: kaizenTailwindTheme,
}
