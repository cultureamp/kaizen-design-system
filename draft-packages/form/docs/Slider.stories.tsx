import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Slider } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Slider",
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
} satisfies Meta<typeof Slider>

export const DefaultKaizenSiteDemo: StoryFn<typeof Slider> = args => (
  <Slider {...args} />
)
DefaultKaizenSiteDemo.storyName = "Slider"
DefaultKaizenSiteDemo.args = {
  labelText: "Work overall",
  minLabel: "Awful",
  maxLabel: "Fantastic",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default"]} />
    <StoryWrapper.Row rowTitle="Label Left">
      <Slider
        description="Example Description"
        labelText="Label"
        minLabel="Minimum"
        maxLabel="Maximum"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Label Top">
      <Slider
        description="Example Description"
        labelText="Label"
        minLabel="Minimum"
        maxLabel="Maximum"
        labelPosition="block"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Prominent">
      <Slider
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
