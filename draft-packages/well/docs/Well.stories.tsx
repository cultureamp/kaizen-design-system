import React from "react"
import { StoryFn } from "@storybook/react"
import { TextField } from "@kaizen/draft-form"
import { Well } from "@kaizen/draft-well"
import { Heading, Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const ExampleContent = (): JSX.Element => (
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
      labelText="Example text field"
      inputValue=""
      onChange={(): void => undefined}
    />
  </div>
)

export default {
  tags: ["autodocs"],
  title: "Components/Well",
  component: Well,
  parameters: {
    docs: {
      description: {
        component: 'import { Well } from "@kaizen/draft-well"',
      },
    },
  },
}

export const DefaultWithSolidBorderKaizenSiteDemo: StoryFn<
  typeof Well
> = args => (
  <Well {...args}>
    <ExampleContent />
  </Well>
)
DefaultWithSolidBorderKaizenSiteDemo.storyName = "Well"
DefaultWithSolidBorderKaizenSiteDemo.parameters = {
  chromatic: { disable: false },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader
      headings={["Solid Border", "Dashed Border", "Borderless"]}
    />
    <StoryWrapper.Row rowTitle="Default">
      <Well variant="default" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="default" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="default" borderStyle="none">
        <ExampleContent />
      </Well>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Informative">
      <Well variant="informative" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="informative" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="informative" borderStyle="none">
        <ExampleContent />
      </Well>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Positive">
      <Well variant="positive" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="positive" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="positive" borderStyle="none">
        <ExampleContent />
      </Well>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Negative">
      <Well variant="negative" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="negative" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="negative" borderStyle="none">
        <ExampleContent />
      </Well>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Cautionary">
      <Well variant="cautionary" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="cautionary" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="cautionary" borderStyle="none">
        <ExampleContent />
      </Well>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Assertive">
      <Well variant="assertive" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="assertive" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="assertive" borderStyle="none">
        <ExampleContent />
      </Well>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
