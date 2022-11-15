import React from "react"
import { Heading, Paragraph } from "@kaizen/typography"
import { TextField } from "@kaizen/draft-form"
import { Well } from "@kaizen/draft-well"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const ExampleContent = () => (
  <div style={{ padding: "1rem" }}>
    <Heading tag="h3" variant="heading-3">
      Heading
    </Heading>
    <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
      <Paragraph tag="p" variant="body">
        This is just a sentence to fill the content area so that you have
        something to look at.
      </Paragraph>
    </div>
    <TextField
      id="blerg"
      labelText="Example text field"
      inputValue=""
      onChange={() => undefined}
    />
  </div>
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
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14168"
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
DefaultWithSolidBorderKaizenSiteDemo.parameters = {
  chromatic: { disable: false },
}

export const DefaultWithDashedBorder = () => (
  <Well borderStyle="dashed">
    <ExampleContent />
  </Well>
)
DefaultWithDashedBorder.storyName = "Default with dashed border"
DefaultWithDashedBorder.parameters = { chromatic: { disable: false } }

export const DefaultWithoutBorder = () => (
  <Well borderStyle="none">
    <ExampleContent />
  </Well>
)
DefaultWithoutBorder.storyName = "Default without border"
DefaultWithoutBorder.parameters = { chromatic: { disable: false } }

export const DefaultWithNoMargin = () => (
  <Well noMargin>
    <ExampleContent />
  </Well>
)
DefaultWithNoMargin.storyName = "Default with no margin"
DefaultWithNoMargin.parameters = { chromatic: { disable: false } }

export const Positive = () => (
  <Well variant="positive">
    <ExampleContent />
  </Well>
)
Positive.parameters = { chromatic: { disable: false } }

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
Negative.parameters = { chromatic: { disable: false } }

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
Informative.parameters = { chromatic: { disable: false } }

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
Cautionary.parameters = { chromatic: { disable: false } }

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
Assertive.parameters = { chromatic: { disable: false } }

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
Prominent.parameters = { chromatic: { disable: false } }

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
