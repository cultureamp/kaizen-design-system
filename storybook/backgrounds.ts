/* eslint import/no-extraneous-dependencies: 0 */

import * as tokens from "@kaizen/design-tokens/tokens/color.json"

export const backgrounds = [
  { name: "Neutral-100", value: tokens.kz.color.neutral["100"] },
  { name: "Neutral-200", value: tokens.kz.color.neutral["200"] },
  { name: "Neutral-300", value: tokens.kz.color.neutral["300"] },
  { name: "Purple 700", value: tokens.kz.color.purple["700"] },
  { name: "Blue 500", value: tokens.kz.color.blue["500"] },
  { name: "Green 500", value: tokens.kz.color.green["500"] },
  { name: "Yellow 500", value: tokens.kz.color.yellow["500"] },
  { name: "Orange 500", value: tokens.kz.color.orange["500"] },
  { name: "Red 500", value: tokens.kz.color.red["500"] },
]

// This is a temporary duplication until we find a way for storybook to like the above ^^ tokens with css variables rather than concretes.
export const cssVarBackgrounds = [
  { name: "Neutral-100", value: tokens["kz-var"].color.neutral["100"] },
  { name: "Neutral-200", value: tokens["kz-var"].color.neutral["200"] },
  { name: "Neutral-300", value: tokens["kz-var"].color.neutral["300"] },
  { name: "Purple 700", value: tokens["kz-var"].color.purple["700"] },
  { name: "Blue 500", value: tokens["kz-var"].color.blue["500"] },
  { name: "Green 500", value: tokens["kz-var"].color.green["500"] },
  { name: "Yellow 500", value: tokens["kz-var"].color.yellow["500"] },
  { name: "Orange 500", value: tokens["kz-var"].color.orange["500"] },
  { name: "Red 500", value: tokens["kz-var"].color.red["500"] },
]
