import * as React from "react"
import { Paragraph } from "../components/Paragraph"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Paragraph",
  component: Paragraph,
  parameters: {
    info: {
      text: `
        import { Paragraph } from "@kaizen/component-library";
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A1289"
    ),
  },
}

export const IntroLede = () => (
  <Paragraph variant="intro-lede">Paragraph Intro Lede</Paragraph>
)

export const Body = () => (
  <Paragraph data-automation-id="test" variant="body">
    Paragraph Body
  </Paragraph>
)

export const BodyBold = () => (
  <>
    <Paragraph data-automation-id="test" variant="body">
      <strong>Paragraph Body (bold)</strong>
    </Paragraph>
    <Paragraph variant="body">
      There is no variant for bold text. You can use{" "}
      <code>&#x3C;strong&#x3E;</code> tags for this purpose and it will have the
      correct font weight applied.
    </Paragraph>
  </>
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

BodyWhite.storyName = "Body White"

BodyWhite.parameters = {
  backgrounds: { default: "Wisteria 700" },
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
