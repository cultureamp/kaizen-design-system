import React from "react"
import { Story } from "@storybook/react"
import { Slider } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Slider`,
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'import { Slider } from "@kaizen/draft-form"',
      },
    },
  },
}

export const DefaultKaizenSiteDemo = args => (
  <Slider id="make-me-unique-1" {...args} />
)
DefaultKaizenSiteDemo.storyName = "Slider"
DefaultKaizenSiteDemo.args = {
  labelText: "Work overall",
  minLabel: "Awful",
  maxLabel: "Fantastic",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default"]} />
    <StoryWrapper.Row rowTitle="Label Left">
      <Slider
        id="make-me-left-1"
        description="Example Description"
        labelText="Label"
        minLabel="Minimum"
        maxLabel="Maximum"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Label Top">
      <Slider
        id="make-me-top-1"
        description="Example Description"
        labelText="Label"
        minLabel="Minimum"
        maxLabel="Maximum"
        labelPosition="block"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Prominent">
      <Slider
        id="make-me-top-1"
        description="Example Description"
        labelText="Label"
        minLabel="Minimum"
        maxLabel="Maximum"
        labelPosition="block"
        variant="prominent"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Prominent">
      <Slider
        id="make-me-top-1"
        description="Example Description"
        labelText="Label"
        minLabel="Minimum"
        maxLabel="Maximum"
        labelPosition="block"
        disabled
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
