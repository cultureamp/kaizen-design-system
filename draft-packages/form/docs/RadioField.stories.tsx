import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { RadioField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Radio/Radio Field",
  component: RadioField,
  parameters: {
    docs: {
      description: {
        component: 'import { RadioField } from "@kaizen/draft-form"',
      },
    },
  },
  argTypes: {
    selectedStatus: {
      control: "disabled",
    },
  },
} satisfies Meta<typeof RadioField>

export const InteractiveKaizenSiteDemo: StoryFn<typeof RadioField> = args => {
  const [status, setStatus] = useState<boolean>()
  const onCheckHandler = (): void => setStatus(!status)

  return (
    <RadioField
      {...args}
      onChange={onCheckHandler}
      selectedStatus={status}
      labelText="label"
    />
  )
}
InteractiveKaizenSiteDemo.storyName = "Radio Field"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="On">
        <RadioField
          name="radio"
          labelText="Label"
          selectedStatus
          value="radio-1"
          reversed={isReversed}
        ></RadioField>
        <RadioField
          name="radio"
          labelText="Label"
          selectedStatus
          disabled
          value="radio-1"
          reversed={isReversed}
        ></RadioField>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Off">
        <RadioField
          name="radio"
          labelText="Label"
          value="radio-1"
          reversed={isReversed}
        ></RadioField>
        <RadioField
          name="radio"
          labelText="Label"
          disabled
          value="radio-1"
          reversed={isReversed}
        ></RadioField>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
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
