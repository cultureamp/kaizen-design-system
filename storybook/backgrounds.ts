/* eslint import/no-extraneous-dependencies: 0 */

import * as colors from "@kaizen/design-tokens/tokens/color.json"

export const backgrounds = [
  { name: "White", value: colors.kz.color.white },
  { name: "Gray 100", value: colors.kz.color.gray["100"] },
  { name: "Gray 300", value: colors.kz.color.gray["300"] },
  { name: "Purple 700", value: colors.kz.color.purple["700"] },
  { name: "Blue 500", value: colors.kz.color.blue["500"] },
  { name: "Green 500", value: colors.kz.color.green["500"] },
  { name: "Yellow 500", value: colors.kz.color.yellow["500"] },
  { name: "Orange 500", value: colors.kz.color.orange["500"] },
  { name: "Red 500", value: colors.kz.color.red["500"] },
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
