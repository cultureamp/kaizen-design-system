import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { DateInputField } from "../index"

export default {
  title: "Components/Date controls/DateInputField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} heading="DateInputField">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <DateInputField
              onButtonClick={() => undefined}
              isReversed={isReversed}
              labelText="Date"
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
            <DateInputField
              onButtonClick={() => undefined}
              isReversed={isReversed}
              labelText="Date"
              data-sb-pseudo-styles="hover"
            />
            <DateInputField
              onButtonClick={() => undefined}
              isReversed={isReversed}
              labelText="Date"
              data-sb-pseudo-styles="focus"
            />
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="Icon button">
            <DateInputField
              onButtonClick={() => undefined}
              isReversed={isReversed}
              labelText="Date"
              classNameOverride="story__date-input-single-field--hover"
            />
            <DateInputField
              onButtonClick={() => undefined}
              isReversed={isReversed}
              labelText="Date"
              classNameOverride="story__date-input-single-field--focus"
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
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
