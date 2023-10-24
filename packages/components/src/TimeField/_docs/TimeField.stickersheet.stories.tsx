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
                data-sb-pseudo-styles="hover--segment"
              />
              <TimeField
                label="Label (focus on hour)"
                locale="en-AU"
                value={{ hour: 22, minutes: 30 }}
                onChange={(): void => undefined}
                data-sb-pseudo-styles="focus--segment"
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
  parameters: {
    pseudo: {
      hover: [
        '[data-sb-pseudo-styles="hover--segment"]',
        '[data-sb-pseudo-styles="hover--segment"] [aria-label*="hour"]',
      ],
      focusVisible:
        '[data-sb-pseudo-styles="focus--segment"] [aria-label*="hour"]',
      focusWithin: '[data-sb-pseudo-styles="focus--segment"]',
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
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
