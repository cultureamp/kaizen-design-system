/* eslint import/no-extraneous-dependencies: 0 */

import * as deprecatedColors from "@kaizen/design-tokens/tokens/color.json"
import * as colors from "@kaizen/design-tokens/tokens/color-vars.json"

export const backgrounds = [
  { name: "White", value: deprecatedColors.kz.color.white },
  { name: "Gray 100", value: deprecatedColors.kz.color.gray["100"] },
  { name: "Gray 300", value: deprecatedColors.kz.color.gray["300"] },
  { name: "Purple 700", value: deprecatedColors.kz.color.purple["700"] },
  { name: "Blue 500", value: deprecatedColors.kz.color.blue["500"] },
  { name: "Green 500", value: deprecatedColors.kz.color.green["500"] },
  { name: "Yellow 500", value: deprecatedColors.kz.color.yellow["500"] },
  { name: "Orange 500", value: deprecatedColors.kz.color.orange["500"] },
  { name: "Red 500", value: deprecatedColors.kz.color.red["500"] },
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
