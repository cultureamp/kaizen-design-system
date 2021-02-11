/* eslint import/no-extraneous-dependencies: 0 */

import { create } from "@storybook/theming/create"
import colorVars from "@kaizen/design-tokens/tokens/color-vars.json"

export default create({
  base: "light",
  brandTitle: "🌱 Storybook",

  // Typography
  fontBase: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
  fontCode: "monospace",

  // Text colors
  extColor: colorVars["kz-var"].color.wisteria["800"],
})
