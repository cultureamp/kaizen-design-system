import React, { useState } from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TimeField } from "../index"
import { ValueType } from "../types"

export default {
  title: "Components/TimeField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [valueDefault, setValueDefault] = useState<ValueType | null>(null)
    const [valueError, setValueError] = useState<ValueType | null>({
      hour: 1,
      minutes: 30,
    })
    const [valueEnUS, setValueEnUS] = useState<ValueType | null>(null)
    const [valueEnGB, setValueEnGB] = useState<ValueType | null>(null)
    const [valueZh, setValueZh] = useState<ValueType | null>(null)

    return (
      <>
        <StickerSheet heading="TimeField" className="w-full">
          <StickerSheet.Header headings={["Default", "Disabled", "Error"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <StickerSheet.Cell className="align-top">
                <TimeField
                  label="Label (en-AU)"
                  locale="en-AU"
                  value={valueDefault}
                  onChange={setValueDefault}
                />
              </StickerSheet.Cell>
              <StickerSheet.Cell className="align-top">
                <TimeField
                  label="Label (en-AU)"
                  locale="en-AU"
                  value={{ hour: 1, minutes: 30 }}
                  onChange={(): void => undefined}
                  isDisabled
                />
              </StickerSheet.Cell>
              <StickerSheet.Cell className="align-top">
                <TimeField
                  label="Label (en-AU)"
                  locale="en-AU"
                  value={valueError}
                  onChange={setValueError}
                  status="error"
                  validationMessage="Date is invalid"
                />
              </StickerSheet.Cell>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Pseudo states" className="w-full">
          <StickerSheet.Header headings={["Hover", "Focus"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
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
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Localisation" className="w-full">
          <StickerSheet.Header headings={["en-US", "en-GB", "zh-HANS-SG"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
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
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
  /** @note: Only required if you have pseudo states, otherwise this can be removed */
  parameters: {
    /** @todo: Remove any inapplicable pseudo states */
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
