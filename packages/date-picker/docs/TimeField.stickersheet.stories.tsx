import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { TimeField } from "../index"
import { ValueType } from "../src/TimeField/types"

export default {
  title: "Stickersheets/TimeField",
} satisfies Meta<typeof TimeField>

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
    <StickerSheet>
      <StickerSheet.Header headings={["Default", "Disabled", "Error"]} />
      <StickerSheet.Row rowTitle="Input">
        <TimeField
          id="timefield-default"
          label="Label (en-AU)"
          locale="en-AU"
          value={valueDefault}
          onChange={setValueDefault}
        />
        <TimeField
          id="timefield-disabled"
          label="Label (en-AU)"
          locale="en-AU"
          value={{ hour: 1, minutes: 30 }}
          onChange={(): void => undefined}
          isDisabled
        />
        <TimeField
          id="timefield-error"
          label="Label (en-AU)"
          locale="en-AU"
          value={valueError}
          onChange={setValueError}
          status="error"
          validationMessage="Date is invalid"
        />
      </StickerSheet.Row>

      <StickerSheet.Header headings={["Hover", "Focus"]} />
      <StickerSheet.Row rowTitle="Pseudo states">
        <TimeField
          id="timefield-hover"
          label="Label (hover on hour)"
          locale="en-AU"
          value={{ hour: 22, minutes: 30 }}
          onChange={(): void => undefined}
          classNameOverride="story__timefield-hover"
        />
        <TimeField
          id="timefield-focus"
          label="Label (focus on hour)"
          locale="en-AU"
          value={{ hour: 22, minutes: 30 }}
          onChange={(): void => undefined}
          classNameOverride="story__timefield-focus"
        />
      </StickerSheet.Row>

      <StickerSheet.Header headings={["en-US", "en-GB", "zh-HANS-SG"]} />
      <StickerSheet.Row rowTitle="Localisation">
        <TimeField
          id="timefield-en-US"
          label="Label"
          locale="en-US"
          value={valueEnUS}
          onChange={setValueEnUS}
        />
        <TimeField
          id="timefield-en-GB"
          label="Label"
          locale="en-GB"
          value={valueEnGB}
          onChange={setValueEnGB}
        />
        <TimeField
          id="timefield-zh-HANS-SG"
          label="Label"
          locale="zh-HANS-SG"
          value={valueZh}
          onChange={setValueZh}
        />
      </StickerSheet.Row>
    </StickerSheet>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
