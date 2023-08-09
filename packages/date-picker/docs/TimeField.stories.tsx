import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { TimeField } from "../index"
import { ValueType } from "../src/TimeField/types"

export default {
  tags: ["autodocs"],
  title: "Components/Time Field",
  component: TimeField,
  parameters: {
    docs: {
      description: {
        component: 'import { TimeField } from "@kaizen/date-picker"',
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
} satisfies Meta<typeof TimeField>

export const DefaultStory: StoryFn<typeof TimeField> = args => {
  const [value, setValue] = useState<ValueType | null>(null)
  return <TimeField {...args} value={value} onChange={setValue} />
}
DefaultStory.storyName = "TimeField"
DefaultStory.args = {
  label: "Launch time",
  locale: "en-US",
  isDisabled: false,
  status: "default",
}

const StickerSheetTemplate: StoryFn = () => {
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
        <TimeField
          label="Label (en-AU)"
          locale="en-AU"
          value={valueDefault}
          onChange={setValueDefault}
        />
        <TimeField
          label="Label (en-AU)"
          locale="en-AU"
          value={{ hour: 1, minutes: 30 }}
          onChange={(): void => undefined}
          isDisabled
        />
        <TimeField
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
        <TimeField
          label="Label (hover on hour)"
          locale="en-AU"
          value={{ hour: 22, minutes: 30 }}
          onChange={(): void => undefined}
          classNameOverride="story__timefield-hover"
        />
        <TimeField
          label="Label (focus on hour)"
          locale="en-AU"
          value={{ hour: 22, minutes: 30 }}
          onChange={(): void => undefined}
          classNameOverride="story__timefield-focus"
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["en-US", "en-GB", "zh-HANS-SG"]} />
      <StoryWrapper.Row rowTitle="Localisation">
        <TimeField
          label="Label"
          locale="en-US"
          value={valueEnUS}
          onChange={setValueEnUS}
        />
        <TimeField
          label="Label"
          locale="en-GB"
          value={valueEnGB}
          onChange={setValueEnGB}
        />
        <TimeField
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
