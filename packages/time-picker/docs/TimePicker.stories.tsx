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

const StickerSheetTemplate: Story = () => {
  const [valueDefault, setValueDefault] = useState<ValueType | null>(null)
  const [valueError, setValueError] = useState<ValueType | null>({
    hour: 1,
    minutes: 30,
  })
  const [valueEnUS, setValueEnUS] = useState<ValueType | null>(null)
  const [valueEnGB, setValueEnGB] = useState<ValueType | null>(null)
  const [valueZh, setValueZh] = useState<ValueType | null>(null)

  return (
    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Default", "Disabled", "Error"]} />
      <StoryWrapper.Row rowTitle="Input">
        <TimePicker
          id="timepicker-default"
          label="Label (en-AU)"
          locale="en-AU"
          value={valueDefault}
          onChange={setValueDefault}
        />
        <TimePicker
          id="timepicker-disabled"
          label="Label (en-AU)"
          locale="en-AU"
          value={{ hour: 1, minutes: 30 }}
          onChange={() => undefined}
          isDisabled
        />
        <TimePicker
          id="timepicker-error"
          label="Label (en-AU)"
          locale="en-AU"
          value={valueError}
          onChange={setValueError}
          status="error"
          validationMessage="Date is invalid"
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Hover", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Pseudo states" gridColumns={3}>
        <TimePicker
          id="timepicker-hover"
          label="Label (hover on hour)"
          locale="en-AU"
          value={{ hour: 22, minutes: 30 }}
          onChange={() => undefined}
          classNameOverride="story__timepicker-hover"
        />
        <TimePicker
          id="timepicker-focus"
          label="Label (focus on hour)"
          locale="en-AU"
          value={{ hour: 22, minutes: 30 }}
          onChange={() => undefined}
          classNameOverride="story__timepicker-focus"
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["en-US", "en-GB", "zh-HANS-SG"]} />
      <StoryWrapper.Row rowTitle="Localisation">
        <TimePicker
          id="timepicker-en-US"
          label="Label"
          locale="en-US"
          value={valueEnUS}
          onChange={setValueEnUS}
        />
        <TimePicker
          id="timepicker-en-GB"
          label="Label"
          locale="en-GB"
          value={valueEnGB}
          onChange={setValueEnGB}
        />
        <TimePicker
          id="timepicker-zh-HANS-SG"
          label="Label"
          locale="zh-HANS-SG"
          value={valueZh}
          onChange={setValueZh}
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
