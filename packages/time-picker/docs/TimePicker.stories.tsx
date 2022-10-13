import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { TimePicker } from "../index"
import { ValueType } from "../src/TimePicker/types"

export default {
  title: `${CATEGORIES.components}/TimePicker`,
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { TimePicker } from "@kaizen/time-picker"',
      },
    },
  },
  argTypes: {
    locale: {
      options: ["en-US", "en-AU", "en-GB", "fr-CA", "zh-Hant"],
      control: { type: "radio" },
    },
    status: { control: { type: "radio" }, options: ["default", "error"] },
    validationMessage: { control: "text" },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof TimePicker>

export const DefaultStory: ComponentStory<typeof TimePicker> = args => {
  const [value, setValue] = useState<ValueType | null>(null)
  return <TimePicker {...args} value={value} onChange={setValue} />
}
DefaultStory.storyName = "TimePicker"
DefaultStory.args = {
  id: "time-picker-input",
  label: "Launch time",
  locale: "en-US",
  isDisabled: false,
  status: "default",
}

const StickerSheetTemplate: Story = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Default", "Disabled", "Error"]} />
    <StoryWrapper.Row rowTitle="Input">
      <TimePicker
        locale="en-GB"
        id="timepicker-default"
        value={null}
        label="Label"
        onChange={() => undefined}
      />

      <TimePicker
        locale="en-GB"
        isDisabled
        id="timepicker-disabled"
        value={{ hour: 1, minutes: 30 }}
        label="Label"
        onChange={() => undefined}
      />

      <TimePicker
        locale="en-GB"
        validationMessage="Date is invalid"
        status="error"
        id="timepicker-error"
        value={{ hour: 1, minutes: 30 }}
        label="Label"
        onChange={() => undefined}
      />
    </StoryWrapper.Row>
    <StoryWrapper.RowHeader headings={["en-US", "en-GB", "zh-HANS-SG"]} />
    <StoryWrapper.Row rowTitle="Localisation">
      <TimePicker
        locale="en-US"
        id="timepicker-en-US"
        value={null}
        label="Label"
        onChange={() => undefined}
      />
      <TimePicker
        locale="en-GB"
        id="timepicker-en-GB"
        value={null}
        label="Label"
        onChange={() => undefined}
      />
      <TimePicker
        locale="zh-HANS-SG"
        id="timepicker-zh-HANS-SG"
        value={null}
        label="Label"
        onChange={() => undefined}
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
