import { ThemeVars, create } from "@storybook/theming"
import { tokens } from "../packages/design-tokens/src/js"
const { color } = tokens

// For styles that cannot be achieved through the folowing config, see
// storybook/manager-head.html or storybook/manager.tsx
const theme: ThemeVars = create({
  base: "light",
  colorSecondary: color.purple["600"],
  // UI
  appBg: color.purple["100"],
  appContentBg: color.white,
  appBorderColor: color.gray["300"],
  appBorderRadius: 7,
  // Typography
  fontBase: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
  fontCode: "monospace",
  // Text colors
  textColor: color.purple["800"],
  textInverseColor: color.white,
  textMutedColor: "rgba(85, 75, 95)",
  // Toolbar default and active colors
  barTextColor: color.gray["600"],
  barSelectedColor: color.purple["600"],
  barBg: color.white,
  // Form colors
  inputBg: color.white,
  inputBorder: color.gray["500"],
  inputTextColor: color.gray["600"],
  inputBorderRadius: 20,
  brandTitle: "Kaizen Storybook",
  brandImage: "./static/media/kaizen-badge.svg",
})

export default theme
