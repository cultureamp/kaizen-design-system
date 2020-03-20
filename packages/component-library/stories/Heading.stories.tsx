import { loadElmStories } from "@cultureamp/elm-storybook"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Box } from "../components/Box"
import { Heading } from "../components/Heading"

export default { title: "Heading (React)", component: Heading }

export const Display0 = () => <Heading variant="display-0">Display 0</Heading>

export const Heading1 = () => (
  <Heading data-automation-id="test" variant="heading-1">
    Heading 1
  </Heading>
)

export const Heading2 = () => <Heading variant="heading-2">Heading 2</Heading>

export const Heading3 = () => <Heading variant="heading-3">Heading 3</Heading>

export const Heading4 = () => <Heading variant="heading-4">Heading 4</Heading>

export const Heading5 = () => <Heading variant="heading-5">Heading 5</Heading>

export const Heading6 = () => <Heading variant="heading-6">Heading 6</Heading>

const Heading1DarkReducedOpacity = () => (
  <Heading variant="heading-1" textColor="dark-reduced-opacity">
    Heading 1 (dark, reduced opacity)
  </Heading>
)

const Heading1White = () => (
  <Heading variant="heading-1" textColor="white">
    Heading 1 (white)
  </Heading>
)

const Heading1WhiteReducedOpacity = () => (
  <Heading variant="heading-1" textColor="white-reduced-opacity">
    Heading 1 (white, reduced opacity)
  </Heading>
)

export const Heading1Positive = () => (
  <Heading variant="heading-1" textColor="positive">
    Heading 1 (positive)
  </Heading>
)

export const Heading1Negative = () => (
  <Heading variant="heading-1" textColor="negative">
    Heading 1 (negative)
  </Heading>
)

export const Heading3Positive = () => (
  <Heading variant="heading-3" textColor="positive">
    Heading 3 (positive)
  </Heading>
)

export const Heading3Negative = () => (
  <Heading variant="heading-3" textColor="negative">
    Heading 3 (negative)
  </Heading>
)

Heading1White.story = {
  name: "Heading 1 White",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria["700"],
        default: true,
      },
    ],
  },
}

Heading1WhiteReducedOpacity.story = {
  name: "Heading 1 White Reduced Opacity",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria["700"],
        default: true,
      },
    ],
  },
}

export {
  Heading1White,
  Heading1WhiteReducedOpacity,
  Heading1DarkReducedOpacity,
}

loadElmStories("Heading (Elm)", module, require("./Heading.stories.elm"), [
  "Display0",
  "Heading1",
  "Heading2",
  "Heading3",
  "Heading4",
  "Heading5",
  "Heading6",
  "HeadingWithDataAttr",
  "HeadingWithCustomClass",
])
