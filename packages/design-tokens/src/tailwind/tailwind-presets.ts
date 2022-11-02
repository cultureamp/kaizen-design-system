// ts-check
// import { Config } from "tailwindcss"
import { defaultTheme } from "../"

// TODO: create a color mapper since you can't just pass in destructure colour into here

const preset = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      ...defaultTheme.color,
      ...defaultTheme.dataViz,
    },
    spacing: {
      ...defaultTheme.spacing,
    },
    boxShadow: {
      none: "none",
      sm: defaultTheme.shadow.small.boxShadow,
      lg: defaultTheme.shadow.large.boxShadow,
    },
    // TODO: borders
    borderRadius: {
      none: "0px",
      DEFAULT: "7px",
      "focus-ring": "10px",
    },
    borderWidth: {
      none: "0px",
      DEFAULT: "2px",
      "focus-ring": "2px",
    },
    borderColor: {
      "focus-ring": defaultTheme.color.blue[600],
    },
    fontFamily: {
      body: defaultTheme.typography.paragraphBody.fontFamily,
      heading: defaultTheme.typography.heading1.fontFamily,
      data: defaultTheme.typography.dataLarge.fontFamily,
      display: defaultTheme.typography.display0.fontFamily,
    },
    fontSize: {
      display: defaultTheme.typography.display0.fontSize,
      "heading-1": defaultTheme.typography.heading1.fontSize,
      "heading-2": defaultTheme.typography.heading2.fontSize,
      "heading-3": defaultTheme.typography.heading3.fontSize,
      "heading-4": defaultTheme.typography.heading4.fontSize,
      "heading-5": defaultTheme.typography.heading5.fontSize,
      "heading-6": defaultTheme.typography.heading6.fontSize,
      paragraph: defaultTheme.typography.paragraphBody.fontSize,
      "paragraph-lede": defaultTheme.typography.paragraphIntroLede.fontSize,
      "paragraph-sm": defaultTheme.typography.paragraphSmall.fontSize,
      "paragraph-xs": defaultTheme.typography.paragraphExtraSmall.fontSize,
      "data-lg": defaultTheme.typography.dataLarge.fontSize,
      "data-md": defaultTheme.typography.dataMedium.fontSize,
      "data-sm": defaultTheme.typography.dataSmall.fontSize,
      "data-units-lg": defaultTheme.typography.dataLargeUnits.fontSize,
      "data-units-md": defaultTheme.typography.dataMediumUnits.fontSize,
      "data-units-sm": defaultTheme.typography.dataSmallUnits.fontSize,
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
      display: defaultTheme.typography.display0.lineHeight,
      "heading-1": defaultTheme.typography.heading1.lineHeight,
      "heading-2": defaultTheme.typography.heading2.lineHeight,
      "heading-3": defaultTheme.typography.heading3.lineHeight,
      "heading-4": defaultTheme.typography.heading4.lineHeight,
      "heading-5": defaultTheme.typography.heading5.lineHeight,
      "heading-6": defaultTheme.typography.heading6.lineHeight,
      paragraph: defaultTheme.typography.paragraphBody.lineHeight,
      "paragraph-lede": defaultTheme.typography.paragraphIntroLede.lineHeight,
      "paragraph-sm": defaultTheme.typography.paragraphSmall.lineHeight,
      "paragraph-xs": defaultTheme.typography.paragraphExtraSmall.lineHeight,
      "data-lg": defaultTheme.typography.dataLarge.lineHeight,
      "data-md": defaultTheme.typography.dataMedium.lineHeight,
      "data-sm": defaultTheme.typography.dataSmall.lineHeight,
      "data-units-lg": defaultTheme.typography.dataLargeUnits.lineHeight,
      "data-units-md": defaultTheme.typography.dataMediumUnits.lineHeight,
      "data-units-sm": defaultTheme.typography.dataSmallUnits.lineHeight,
    },
    letterSpacing: {
      normal: "normal",
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
    screens: {
      ...defaultTheme.layout.breakpoints,
    },
  },
}

module.exports.TailwindPreset = preset
