import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { TextField } from "@kaizen/draft-form"
import { Well } from "@kaizen/draft-well"
import { Heading, Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"

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
      id="blerg"
      labelText="Example text field"
      inputValue=""
      onChange={(): void => undefined}
    />
  </div>
)

export default {
  title: "Components/Well",
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

export const DefaultWithSolidBorderKaizenSiteDemo: ComponentStory<
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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
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
