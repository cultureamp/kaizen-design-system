import * as twDefaultTheme from "tailwindcss/defaultTheme"
import { ThemeConfig } from "tailwindcss/types/config"

import { defaultTheme } from "@kaizen/design-tokens"

export type KaizenTailwindTheme = Partial<ThemeConfig>
export interface KaizenTailwindPreset {
  theme: KaizenTailwindTheme
}

// Note: changing any token will require to to run build:ts from the root `design-tokens`
// TODO: Use `satisfies` keyword once our storybook supports it.
// This will allow us to satisfy Partial<ThemeConfig> without broadening the constraints on kaizenTailwindTheme.
// We can then remove type guards and type casting in BorderSpacing.stories.tsx etc.
export const kaizenTailwindTheme: Partial<ThemeConfig> = {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    inherit: "inherit",
    ...defaultTheme.color,
    ...defaultTheme.dataViz,
  },
  spacing: {
    ...defaultTheme.spacing,
    ...twDefaultTheme.spacing,
  },
  boxShadow: {
    none: "none",
    sm: defaultTheme.shadow.small.boxShadow,
    lg: defaultTheme.shadow.large.boxShadow,
  },
  borderRadius: {
    none: "0px",
    default: "7px",
    "focus-ring": "10px",
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
  // font weights could have specific tokens (current don't)
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
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
    "spacing-normal": "normal",
  },
  // A mix of layout styles
  maxWidth: {
    content: defaultTheme.layout.contentMaxWidth,
    "content-with-side": defaultTheme.layout.contentMaxWidthWithSidebar,
  },
  width: {
    "content-side-margin": defaultTheme.layout.contentSideMargin,
  },
  height: {
    "mobile-actions-drawer-height":
      defaultTheme.layout.mobileActionsDrawerHeight,
    "navigation-bar-height": defaultTheme.layout.navigationBarHeight,
  },
  // we will probably want to review viewport sizing
  screens: {
    "media-min-md": defaultTheme.layout.breakpoints.medium, // => @media (min-width: 768px) { ... }
    "media-min-lg": defaultTheme.layout.breakpoints.large, // => @media (min-width: 1080px) { ... }
    "media-max-md": { max: defaultTheme.layout.breakpoints.medium }, // => @media (max-width: 768px) { ... }
    "media-max-lg": { max: defaultTheme.layout.breakpoints.large }, // => @media (min-width: 1080px) { ... }
  },
}

export const TailwindPreset: KaizenTailwindPreset = {
  theme: kaizenTailwindTheme,
}
