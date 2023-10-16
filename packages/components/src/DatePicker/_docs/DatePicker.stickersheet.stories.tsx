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
        <StickerSheet isReversed={isReversed} heading="DatePicker">
          <StickerSheet.Header
            headings={[
              "Default",
              "Selected Value",
              "Custom Description",
              "Disabled",
            ]}
          />
          <StickerSheet.Body>
            <StickerSheet.Row style={{ verticalAlign: "top" }}>
              <DatePicker
                labelText="Label"
                selectedDay={selectedDate}
                onDayChange={setValueDate}
                isReversed={isReversed}
              />
              <DatePicker
                labelText="Label"
                selectedDay={new Date(2022, 1, 5)}
                onDayChange={() => undefined}
                isReversed={isReversed}
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
              />
              <DatePicker
                labelText="Label"
                selectedDay={undefined}
                onDayChange={() => undefined}
                isReversed={isReversed}
                disabled
              />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} heading="Pseudo states">
          <StickerSheet.Header
            headings={["Hover", "Focus"]}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Container">
              <DatePicker
                isReversed={isReversed}
                labelText="Date"
                selectedDay={undefined}
                onDayChange={() => undefined}
                data-sb-pseudo-styles="hover"
              />
              <DatePicker
                isReversed={isReversed}
                labelText="Date"
                selectedDay={undefined}
                onDayChange={() => undefined}
                data-sb-pseudo-styles="focus"
              />
            </StickerSheet.Row>

            <StickerSheet.Row rowTitle="Icon button">
              <DatePicker
                isReversed={isReversed}
                labelText="Date"
                selectedDay={undefined}
                onDayChange={() => undefined}
                classNameOverride="story__date-input-single-field--hover"
              />
              <DatePicker
                isReversed={isReversed}
                labelText="Date"
                selectedDay={undefined}
                onDayChange={() => undefined}
                classNameOverride="story__date-input-single-field--focus"
              />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} heading="Validation">
          <StickerSheet.Header headings={["Error", "Caution"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <DatePicker
                labelText="Label"
                selectedDay={new Date("potato")}
                onDayChange={() => undefined}
                isReversed={isReversed}
              />
              <DatePicker
                labelText="Label"
                selectedDay={undefined}
                onDayChange={() => undefined}
                isReversed={isReversed}
                status="caution"
                validationMessage="Custom cautionary message"
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
  parameters: {
    pseudo: {
      hover: [
        '[data-sb-pseudo-styles="hover"]',
        ".story__date-input-single-field--hover button",
      ],
      focus: [
        '[data-sb-pseudo-styles="focus"]',
        ".story__date-input-single-field--focus button",
      ],
      focusVisible: [
        '[data-sb-pseudo-styles="focus"]',
        ".story__date-input-single-field--focus button",
      ],
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
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
