import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { Box } from "@kaizen/component-library"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { Paragraph } from "../components/Paragraph"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.typography}/Paragraph`,
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: 'import { Paragraph } from "@kaizen/component-library"',
      },
    },
  },
}

const Documentation = ({ reversed }: { reversed?: boolean }) => (
  <Box mt={2}>
    <Paragraph variant="body" color={reversed ? "white" : "dark"}>
      <ul>
        <li>
          There is no variant for bold text. You can use{" "}
          <code>&#x3C;strong&#x3E;</code> tags for this purpose and it will have
          the correct font weight applied.
        </li>
        <li>
          Use the <code>color</code> prop to change the text color. This prop is
          typed to restrict values to a designer-approved palette. Do not modify
          color by targeting the element via CSS from outside the{" "}
          <code>Paragraph</code> component, because this causes problems in
          future rebrands when our colors change.
        </li>
        <li>
          If you want to apply margin or padding to a <code>Paragraph</code>,
          you can either
          <ul>
            <li>wrap it in a new div with margin or padding applied, or</li>
            <li>
              wrap it in the{" "}
              <a href="/?path=/story/box-react--box-default">
                <code>Box</code>
              </a>{" "}
              component, which gives you a no-CSS way to create spacing.
            </li>
          </ul>
        </li>
        <li>
          Design-related documentation is available on the{" "}
          <a href="https://cultureamp.design/guidelines/typography/">
            Typography guidlines on the Kaizen Site
          </a>
          .
        </li>
      </ul>
    </Paragraph>
  </Box>
)

export const IntroLede = () => (
  <>
    <Paragraph variant="intro-lede">Paragraph Intro Lede</Paragraph>
    <Documentation />
  </>
)

export const Body = () => (
  <>
    <Paragraph data-automation-id="test" variant="body">
      Paragraph Body
    </Paragraph>
    <Documentation />
  </>
)

export const BodyBold = () => (
  <>
    <Paragraph data-automation-id="test" variant="body">
      <strong>Paragraph Body (bold)</strong>
    </Paragraph>
    <Documentation />
  </>
)

export const BodyDarkReducedOpacity = () => (
  <>
    <Paragraph
      data-automation-id="test"
      variant="body"
      color="dark-reduced-opacity"
    >
      Paragraph Body
    </Paragraph>
    <Documentation />
  </>
)

export const BodyWhite = () => (
  <>
    <Paragraph variant="body" color="white">
      Paragraph Body
    </Paragraph>
    <Documentation reversed />
  </>
)

BodyWhite.storyName = "Body White"

BodyWhite.parameters = {
  backgrounds: { default: "Purple 700" },
}

export const BodyPositive = () => (
  <>
    <Paragraph variant="body" color="positive">
      Paragraph Body
    </Paragraph>
    <Documentation />
  </>
)

export const BodyNegative = () => (
  <>
    <Paragraph variant="body" color="negative">
      Paragraph Body
    </Paragraph>
    <Documentation />
  </>
)

export const Small = () => (
  <>
    <Paragraph variant="small">Paragraph Small</Paragraph>
    <Documentation />
  </>
)

export const ExtraSmall = () => (
  <>
    <Paragraph variant="extra-small">Paragraph Extra Small</Paragraph>
    <Documentation />
  </>
)
