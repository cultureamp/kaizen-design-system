/* eslint import/no-extraneous-dependencies: 0 */

import { defaultTheme } from "@kaizen/design-tokens"
import colors from "@kaizen/design-tokens/tokens/color.json"

export const backgrounds = [
  { name: "White", value: defaultTheme.color.white },
  { name: "Gray 100", value: defaultTheme.color.gray["100"] },
  { name: "Gray 300", value: defaultTheme.color.gray["300"] },
  { name: "Purple 700", value: defaultTheme.color.purple["700"] },
  { name: "Blue 500", value: defaultTheme.color.blue["500"] },
  { name: "Green 500", value: defaultTheme.color.green["500"] },
  { name: "Yellow 500", value: defaultTheme.color.yellow["500"] },
  { name: "Orange 500", value: defaultTheme.color.orange["500"] },
  { name: "Red 500", value: defaultTheme.color.red["500"] },
]

// This is a temporary duplication until we find a way for storybook to like the above ^^ tokens with css variables rather than concretes.
export const cssVarBackgrounds = [
  { name: "White", value: colors.color.white },
  { name: "Gray 100", value: colors.color.gray["100"] },
  { name: "Gray 300", value: colors.color.gray["300"] },
  { name: "Purple 700", value: colors.color.purple["700"] },
  { name: "Blue 500", value: colors.color.blue["500"] },
  { name: "Green 500", value: colors.color.green["500"] },
  { name: "Yellow 500", value: colors.color.yellow["500"] },
  { name: "Orange 500", value: colors.color.orange["500"] },
  { name: "Red 500", value: colors.color.red["500"] },
]
