/* eslint import/no-extraneous-dependencies: 0 */

import * as tokens from "@kaizen/design-tokens/tokens/color.json"
import * as variables from "@kaizen/design-tokens/tokens/color-vars.json"

export const backgrounds = [
  { name: "White", value: tokens.kz.color.white },
  { name: "Stone", value: tokens.kz.color.stone },
  { name: "Ash", value: tokens.kz.color.ash },
  { name: "Wisteria 700", value: tokens.kz.color.wisteria["700"] },
  { name: "Cluny 500", value: tokens.kz.color.cluny["500"] },
  { name: "Seedling 500", value: tokens.kz.color.seedling["500"] },
  { name: "Yuzu 500", value: tokens.kz.color.yuzu["500"] },
  { name: "Peach 500", value: tokens.kz.color.peach["500"] },
  { name: "Coral 500", value: tokens.kz.color.coral["500"] },
]

// This is a temporary duplication until we find a way for storybook to like the above ^^ tokens with css variables rather than concretes.
export const cssVarBackgrounds = [
  { name: "White", value: variables["kz-var"].color.white },
  { name: "Stone", value: variables["kz-var"].color.stone },
  { name: "Ash", value: variables["kz-var"].color.ash },
  { name: "Wisteria 700", value: variables["kz-var"].color.wisteria["700"] },
  { name: "Cluny 500", value: variables["kz-var"].color.cluny["500"] },
  { name: "Seedling 500", value: variables["kz-var"].color.seedling["500"] },
  { name: "Yuzu 500", value: variables["kz-var"].color.yuzu["500"] },
  { name: "Peach 500", value: variables["kz-var"].color.peach["500"] },
  { name: "Coral 500", value: variables["kz-var"].color.coral["500"] },
]
