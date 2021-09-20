import * as React from "react"
import { Paragraph, Box } from "@kaizen/component-library"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { Heading } from "../components/Heading"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.typography}/Heading`,
  component: Heading,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Documentation />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
}

const Documentation = ({ reversed }: { reversed?: boolean }) => (
  <Box mt={2}>
    <Paragraph variant="body" color={reversed ? "white" : "dark"}>
      <ul>
        <li>
          The <code>variant</code> prop is required, but the <code>tag</code>{" "}
          prop is not. If no <code>tag</code> prop is provided,{" "}
          <code>Heading</code> will attempt to render the appropriate tag based
          on the chosen <code>variant</code>. This cannot be relied on to give
          you the right tag in 100% of cases, so we recommend manually choosing
          the appropriate tag for your situation.
        </li>
        <li>
          Use the <code>color</code> prop to change the text color. This prop is
          typed to restrict values to a designer-approved palette. Do not modify
          color by targeting the element via CSS from outside the{" "}
          <code>Heading</code> component, because this causes problems in future
          rebrands when our colors change.
        </li>
        <li>
          <strong>Semantic, logical HTML should always take priority</strong>{" "}
          when deciding which <code>tag</code> to use:
          <ul>
            <li>
              Heading elements should never skip a level, e.g. an{" "}
              <code>h2</code> followed by an <code>h4</code> should be avoided.
            </li>
            <li>
              The main heading on the page that accurately summarizes the page
              should be an <code>h1</code>.
            </li>
            <li>
              A <code>Heading</code> should not have a bigger <code>tag</code>{" "}
              than another visually smaller <code>Heading</code>.
            </li>
            <li>
              <strong>
                Illogical heading orders will cause pages to fail WCAG
                compliance tests &amp; audits.
              </strong>
            </li>
          </ul>
        </li>
      </ul>
    </Paragraph>
  </Box>
)

export const Display0 = () => (
  <>
    <Heading variant="display-0">Display 0</Heading>
  </>
)

export const Heading1 = () => (
  <>
    <Heading data-automation-id="test" variant="heading-1">
      Heading 1
    </Heading>
  </>
)

export const Heading2 = () => (
  <>
    <Heading variant="heading-2">Heading 2</Heading>
  </>
)

export const Heading3 = () => (
  <>
    <Heading variant="heading-3">Heading 3</Heading>
  </>
)

export const Heading4 = () => (
  <>
    {" "}
    <Heading variant="heading-4">Heading 4</Heading>
  </>
)

export const Heading5 = () => (
  <>
    <Heading variant="heading-5">Heading 5</Heading>
  </>
)

export const Heading6 = () => (
  <>
    <Heading variant="heading-6">Heading 6</Heading>
  </>
)

const Heading1DarkReducedOpacity = () => (
  <>
    <Heading variant="heading-1" color="dark-reduced-opacity">
      Heading 1 (dark, reduced opacity)
    </Heading>
  </>
)

const Heading1White = () => (
  <>
    <Heading variant="heading-1" color="white">
      Heading 1 (white)
    </Heading>
    <Documentation reversed />
  </>
)

const Heading1WhiteReducedOpacity = () => (
  <>
    <Heading variant="heading-1" color="white-reduced-opacity">
      Heading 1 (white, reduced opacity)
    </Heading>
    <Documentation reversed />
  </>
)

export const Heading1Positive = () => (
  <>
    <Heading variant="heading-1" color="positive">
      Heading 1 (positive)
    </Heading>
  </>
)

export const Heading1Negative = () => (
  <>
    <Heading variant="heading-1" color="negative">
      Heading 1 (negative)
    </Heading>
  </>
)

export const Heading3Positive = () => (
  <>
    <Heading variant="heading-3" color="positive">
      Heading 3 (positive)
    </Heading>
  </>
)

export const Heading3Negative = () => (
  <>
    <Heading variant="heading-3" color="negative">
      Heading 3 (negative)
    </Heading>
  </>
)

Heading1White.storyName = "Heading 1 White"

Heading1White.parameters = {
  backgrounds: { default: "Purple 700" },
}

Heading1WhiteReducedOpacity.storyName = "Heading 1 White Reduced Opacity"

Heading1WhiteReducedOpacity.parameters = {
  backgrounds: { default: "Purple 700" },
}

export {
  Heading1White,
  Heading1WhiteReducedOpacity,
  Heading1DarkReducedOpacity,
}
