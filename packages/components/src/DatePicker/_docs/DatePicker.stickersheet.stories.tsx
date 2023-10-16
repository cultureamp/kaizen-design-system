import React, { useState } from "react"
import { Meta } from "@storybook/react"
import { Text } from "~components/Text"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { DatePicker } from "../index"

export default {
  title: "Components/Date controls/DatePicker",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const [selectedDate, setValueDate] = useState<Date | undefined>()
    return (
      <>
        <StickerSheet isReversed={isReversed} heading="Input">
          <StickerSheet.Header
            headings={[
              "Default",
              "Selected Value",
              "Custom Description",
              "Disabled",
              "Error",
            ]}
          />
          <StickerSheet.Body>
            <StickerSheet.Row style={{ verticalAlign: "top" }}>
              <DatePicker
                labelText="Label"
                selectedDay={selectedDate}
                onDayChange={setValueDate}
                isReversed={isReversed}
                locale="en-AU"
              />
              <DatePicker
                labelText="Label"
                selectedDay={new Date(2022, 1, 5)}
                onDayChange={() => undefined}
                isReversed={isReversed}
                locale="en-AU"
              />
              <DatePicker
                labelText="Label"
                selectedDay={undefined}
                onDayChange={() => undefined}
                isReversed={isReversed}
                description={
                  <>
                    <Text
                      tag="span"
                      variant="small"
                      color={isReversed ? "white" : "dark"}
                    >
                      My <strong>Custom</strong> Description
                    </Text>
                  </>
                }
                locale="en-AU"
              />
              <DatePicker
                labelText="Label"
                selectedDay={undefined}
                onDayChange={() => undefined}
                isReversed={isReversed}
                locale="en-AU"
                disabled
              />
              <DatePicker
                labelText="Label"
                selectedDay={new Date("potato")}
                onDayChange={() => undefined}
                isReversed={isReversed}
                locale="en-AU"
              />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} heading="Localisation">
          <StickerSheet.Header headings={["en-AU", "en-US"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <DatePicker
                labelText="Label"
                selectedDay={new Date("2022, 1, 5")}
                onDayChange={() => undefined}
                isReversed={isReversed}
                locale="en-AU"
              />
              <DatePicker
                labelText="Label"
                selectedDay={new Date("2022, 1, 5")}
                onDayChange={() => undefined}
                isReversed={isReversed}
                locale="en-US"
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

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
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
