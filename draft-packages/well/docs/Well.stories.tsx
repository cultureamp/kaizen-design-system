import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { TextField } from "@kaizen/draft-form"
import { Well } from "@kaizen/draft-well"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const ExampleContent = () => (
  <Box p={1}>
    <Heading tag="h3" variant="heading-3">
      Heading
    </Heading>
    <Box my={1}>
      <Paragraph tag="p" variant="body">
        This is just a sentence to fill the content area so that you have
        something to look at.
      </Paragraph>
    </Box>
    <TextField
      id="blerg"
      labelText="Example text field"
      inputValue=""
      onChange={() => undefined}
    />
  </Box>
)

export default {
  title: `${CATEGORIES.components}/Well`,
  component: Well,
  parameters: {
    docs: {
      description: {
        component: 'import { Well } from "@kaizen/draft-well"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A14168"
    ),
  },
  decorators: [withDesign],
}

export const DefaultWithSolidBorderKaizenSiteDemo = () => (
  <Well>
    <ExampleContent />
  </Well>
)

DefaultWithSolidBorderKaizenSiteDemo.storyName =
  "Default with solid border (Kaizen Site Demo)"

export const DefaultWithDashedBorder = () => (
  <Well borderStyle="dashed">
    <ExampleContent />
  </Well>
)

DefaultWithDashedBorder.storyName = "Default with dashed border"

export const DefaultWithoutBorder = () => (
  <Well borderStyle="none">
    <ExampleContent />
  </Well>
)

DefaultWithoutBorder.storyName = "Default without border"

export const DefaultWithNoMargin = () => (
  <Well noMargin>
    <ExampleContent />
  </Well>
)

DefaultWithNoMargin.storyName = "Default with no margin"

export const Positive = () => (
  <Well variant="positive">
    <ExampleContent />
  </Well>
)

export const Negative = () => (
  <Well variant="negative">
    <ExampleContent />
  </Well>
)

export const Informative = () => (
  <Well variant="informative">
    <ExampleContent />
  </Well>
)

export const Cautionary = () => (
  <Well variant="cautionary">
    <ExampleContent />
  </Well>
)

export const InformativeWithDashedBorder = () => (
  <Well variant="informative" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

InformativeWithDashedBorder.storyName = "Informative with dashed border"
