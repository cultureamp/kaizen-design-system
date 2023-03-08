/* eslint import/no-extraneous-dependencies: 0 */
import { ThemeVars, create } from "@storybook/theming"
import { defaultTheme } from "@kaizen/design-tokens"
// const logo = require("./assets/kaizen-badge.png")

const colors = defaultTheme.color

const theme: ThemeVars = create({
  base: "light",
  colorSecondary: colors.purple["600"],
  // UI
  appBg: colors.purple["100"],
  appContentBg: colors.white,
  appBorderColor: colors.gray["300"],
  appBorderRadius: 7,
  // Typography
  fontBase: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
  fontCode: "monospace",
  // Text colors
  textColor: colors.purple["800"],
  textInverseColor: colors.white,
  textMutedColor: "rgba(110, 90, 125)",
  // Toolbar default and active colors
  barTextColor: colors.gray["600"],
  barSelectedColor: colors.purple["600"],
  barBg: colors.white,
  // Form colors
  inputBg: colors.white,
  inputBorder: colors.gray["500"],
  inputTextColor: colors.gray["600"],
  inputBorderRadius: 20,
  brandTitle: "Kaizen Storybook",
  brandImage: "./assets/kaizen-badge.png",
})

export default theme
