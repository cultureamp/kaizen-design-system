import { defaultTheme } from "../"

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    color: {
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
    fontFamily: {
      body: defaultTheme.typography.paragraphBody.fontFamily,
      heading: defaultTheme.typography.heading1.fontFamily,
    },
    fontSize: {
      "heading-1": defaultTheme.typography.heading1.fontSize,
      "heading-2": defaultTheme.typography.heading2.fontSize,
      "heading-3": defaultTheme.typography.heading3.fontSize,
      "heading-4": defaultTheme.typography.heading4.fontSize,
      "heading-5": defaultTheme.typography.heading5.fontSize,
      "heading-6": defaultTheme.typography.heading6.fontSize,
      body: defaultTheme.typography.paragraphBody.fontSize,
      "body-lede": defaultTheme.typography.paragraphIntroLede.fontSize,
      "body-sm": defaultTheme.typography.paragraphSmall.fontSize,
      "body-xs": defaultTheme.typography.paragraphExtraSmall.fontSize,
    },
    fontWeight: {
      heavy: 600,
      light: 300,
    },
    body: {
      lede: defaultTheme.typography.paragraphIntroLede.fontSize,
      body: defaultTheme.typography.paragraphBody.fontSize,
    },
  },
}
