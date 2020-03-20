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

const Heading1DarkTranslucent = () => (
  <Heading variant="heading-1" color="dark-translucent">
    Heading 1 (dark, translucent)
  </Heading>
)

const Heading1Light = () => (
  <Heading variant="heading-1" color="light">
    Heading 1 (light)
  </Heading>
)

const Heading1LightTranslucent = () => (
  <Heading variant="heading-1" color="light-translucent">
    Heading 1 (light, translucent)
  </Heading>
)

export const Heading1Positive = () => (
  <Heading variant="heading-1" color="positive">
    Heading 1 (positive)
  </Heading>
)

export const Heading1Negative = () => (
  <Heading variant="heading-1" color="negative">
    Heading 1 (negative)
  </Heading>
)

export const Heading3Positive = () => (
  <Heading variant="heading-3" color="positive">
    Heading 3 (positive)
  </Heading>
)

export const Heading3Negative = () => (
  <Heading variant="heading-3" color="negative">
    Heading 3 (negative)
  </Heading>
)

Heading1Light.story = {
  name: "Heading 1 Light",
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

Heading1LightTranslucent.story = {
  name: "Heading 1 Light Translucent",
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

export { Heading1Light, Heading1LightTranslucent, Heading1DarkTranslucent }

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
