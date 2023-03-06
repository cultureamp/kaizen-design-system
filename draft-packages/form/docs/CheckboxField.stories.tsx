import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CheckboxField, CheckedStatus } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `Components/${SUB_CATEGORIES.form}/Checkbox Field`,
  component: CheckboxField,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component: 'import { CheckboxField } from "@kaizen/draft-form";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14462%3A196"
    ),
  },
  argTypes: {
    checkedStatus: {
      control: "disabled",
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof CheckboxField>

export const InteractiveKaizenSiteDemo: ComponentStory<
  typeof CheckboxField
> = args => {
  const [status, setStatus] = useState<CheckedStatus>()
  const onCheckHandler = (): void => {
    const newStatus = status === "on" ? "off" : "on"
    setStatus(newStatus)
  }
  return (
    <CheckboxField
      {...args}
      onCheck={onCheckHandler}
      checkedStatus={status}
      id="checkbox-1"
      labelText="label"
    />
  )
}
InteractiveKaizenSiteDemo.storyName = "Checkbox Field"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="On">
        <CheckboxField
          id="checkbox-on"
          checkedStatus="on"
          labelText="Label"
          reversed={isReversed}
        />
        <CheckboxField
          id="checkbox-on-disabled"
          checkedStatus="on"
          labelText="Label"
          disabled
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Off">
        <CheckboxField
          id="checkbox-off"
          checkedStatus="off"
          labelText="Label"
          reversed={isReversed}
        />
        <CheckboxField
          id="checkbox-off-disabled"
          checkedStatus="off"
          labelText="Label"
          disabled
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Mixed">
        <CheckboxField
          id="checkbox-mixed"
          checkedStatus="mixed"
          labelText="Label"
          reversed={isReversed}
        />
        <CheckboxField
          id="checkbox-mixed-disabled"
          checkedStatus="mixed"
          labelText="Label"
          disabled
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Bottom Margin">
        <div>
          <CheckboxField
            id="checkbox-no-mb-1"
            checkedStatus="off"
            labelText="Label"
            noBottomMargin
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-no-mb-2"
            checkedStatus="off"
            labelText="Label"
            noBottomMargin
            reversed={isReversed}
          />
        </div>
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
