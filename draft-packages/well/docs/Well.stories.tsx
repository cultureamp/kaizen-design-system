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

export const PositiveWithDashedBorder = () => (
  <Well variant="positive" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

PositiveWithDashedBorder.storyName = "Positive with dashed border"

export const PositiveWithNoBorder = () => (
  <Well variant="positive" borderStyle="none">
    <ExampleContent />
  </Well>
)

PositiveWithNoBorder.storyName = "Positive with no border"

export const Negative = () => (
  <Well variant="negative">
    <ExampleContent />
  </Well>
)

export const NegativeWithDashedBorder = () => (
  <Well variant="negative" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

NegativeWithDashedBorder.storyName = "Negative with dashed border"

export const NegativeWithNoBorder = () => (
  <Well variant="negative" borderStyle="none">
    <ExampleContent />
  </Well>
)

NegativeWithNoBorder.storyName = "Negative with no border"

export const Informative = () => (
  <Well variant="informative">
    <ExampleContent />
  </Well>
)

export const InformativeWithDashedBorder = () => (
  <Well variant="informative" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

InformativeWithDashedBorder.storyName = "Informative with dashed border"

export const InformativeWithNoBorder = () => (
  <Well variant="informative" borderStyle="none">
    <ExampleContent />
  </Well>
)

InformativeWithNoBorder.storyName = "Informative with no border"

export const Cautionary = () => (
  <Well variant="cautionary">
    <ExampleContent />
  </Well>
)

export const CautionaryWithDashedBorder = () => (
  <Well variant="cautionary" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

CautionaryWithDashedBorder.storyName = "Cautionary with dashed border"

export const CautionaryWithNoBorder = () => (
  <Well variant="cautionary" borderStyle="none">
    <ExampleContent />
  </Well>
)

CautionaryWithNoBorder.storyName = "Cautionary with no border"

export const Assertive = () => (
  <Well variant="assertive">
    <ExampleContent />
  </Well>
)

export const AssertiveWithDashedBorder = () => (
  <Well variant="assertive" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

AssertiveWithDashedBorder.storyName = "Assertive with dashed border"

export const AssertiveWithNoBorder = () => (
  <Well variant="assertive" borderStyle="none">
    <ExampleContent />
  </Well>
)

AssertiveWithNoBorder.storyName = "Assertive with no border"

export const Prominent = () => (
  <Well variant="prominent">
    <ExampleContent />
  </Well>
)

export const ProminentWithDashedBorder = () => (
  <Well variant="prominent" borderStyle="dashed">
    <ExampleContent />
  </Well>
)

ProminentWithDashedBorder.storyName = "Prominent with dashed border"

export const ProminentWithNoBorder = () => (
  <Well variant="prominent" borderStyle="none">
    <ExampleContent />
  </Well>
)

ProminentWithNoBorder.storyName = "Prominent with no border"
