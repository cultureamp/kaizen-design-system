/* eslint import/no-extraneous-dependencies: 0 */

import { defaultTheme } from "@kaizen/design-tokens"
import { create } from "@storybook/theming/create"

export default create({
  base: "light",
  brandTitle: "🌱 Storybook",

  // Typography
  fontBase: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
  fontCode: "monospace",

  // Text colors
  // Doesn't seem to like CSS Variables wah
  textColor: defaultTheme.color.purple["800"],
})
