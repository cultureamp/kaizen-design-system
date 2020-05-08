import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Paragraph } from "../components/Paragraph"

export default { title: "Paragraph", component: Paragraph }

export const IntroLede = () => (
  <Paragraph variant="intro-lede">Paragraph Intro Lede</Paragraph>
)

export const Body = () => (
  <Paragraph data-automation-id="test" variant="body">
    Paragraph Body
  </Paragraph>
)

export const BodyDarkReducedOpacity = () => (
  <Paragraph
    data-automation-id="test"
    variant="body"
    color="dark-reduced-opacity"
  >
    Paragraph Body
  </Paragraph>
)

export const BodyWhite = () => (
  <Paragraph variant="body" color="white">
    Paragraph Body
  </Paragraph>
)

BodyWhite.story = {
  name: "Body White",
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

export const BodyPositive = () => (
  <Paragraph variant="body" color="positive">
    Paragraph Body
  </Paragraph>
)

export const BodyNegative = () => (
  <Paragraph variant="body" color="negative">
    Paragraph Body
  </Paragraph>
)

export const Small = () => (
  <Paragraph variant="small">Paragraph Small</Paragraph>
)

export const ExtraSmall = () => (
  <Paragraph variant="extra-small">Paragraph Extra Small</Paragraph>
)
