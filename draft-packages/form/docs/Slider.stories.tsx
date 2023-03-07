import React from "react"
import { Meta, ComponentStory, Story } from "@storybook/react"
import { Slider } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: "Components/Form/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'import { Slider } from "@kaizen/draft-form"',
      },
    },
  },
  argTypes: {
    readOnlyMessage: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
} as Meta<typeof Slider>

export const DefaultKaizenSiteDemo: ComponentStory<typeof Slider> = args => (
  <Slider {...args} />
)
DefaultKaizenSiteDemo.storyName = "Slider"
DefaultKaizenSiteDemo.args = {
  id: "make-me-unique-1",
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
