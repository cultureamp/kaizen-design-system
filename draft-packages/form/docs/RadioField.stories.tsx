import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { RadioField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `Components/${SUB_CATEGORIES.form}/Radio Field`,
  component: RadioField,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component: 'import { RadioField } from "@kaizen/draft-form"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14354%3A68219"
    ),
  },
  argTypes: {
    selectedStatus: {
      control: "disabled",
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof RadioField>

export const InteractiveKaizenSiteDemo: ComponentStory<
  typeof RadioField
> = args => {
  const [status, setStatus] = useState<boolean>()
  const onCheckHandler = (): void => setStatus(!status)

  return (
    <RadioField
      {...args}
      onChange={onCheckHandler}
      selectedStatus={status}
      id="checkbox-1"
      labelText="label"
    />
  )
}
InteractiveKaizenSiteDemo.storyName = "Radio Field"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="On">
        <RadioField
          name="radio"
          id="radio-on"
          labelText="Label"
          selectedStatus
          value="radio-1"
          reversed={isReversed}
        ></RadioField>
        <RadioField
          name="radio"
          id="radio-on-disabled"
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
          id="radio-off"
          labelText="Label"
          value="radio-1"
          reversed={isReversed}
        ></RadioField>
        <RadioField
          name="radio"
          id="radio-off-disabled"
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
