import { create } from "@storybook/theming/create"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"

export default create({
  base: "light",
  brandTitle: "🌱 Storybook",

  // Typography
  fontBase: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: colorTokens.kz.color.wisteria["800"],
})
