import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelectToggle } from "../index"

export default {
  title: "Components/MultiSelect/MultiSelectToggle",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no controlled element on purpose, to be used within `MultiSelect` where popover is present
            id: "aria-valid-attr-value",
            enabled: false,
          },
          {
            // Built with no label for the button on purpose, to be used within `MultiSelect` where label is present
            id: "button-name",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        isReversed={isReversed}
        heading="MultiSelectToggle"
        className="w-full"
      >
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Open">
            <MultiSelectToggle
              selectedOptions={[]}
              isOpen
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Has selected values">
            <MultiSelectToggle
              selectedOptions={[{ value: "pancakes", label: "Pancakes" }]}
              isOpen
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet
        isReversed={isReversed}
        heading="Pseudo states"
        className="w-full"
      >
        <StickerSheet.Header
          headings={["Hover", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Toggle">
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              data-sb-pseudo-styles="hover"
            />
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              data-sb-pseudo-styles="focus"
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Toggle Button">
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              data-sb-pseudo-styles="hover--button"
            />
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              data-sb-pseudo-styles="focus--button"
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
        '[data-sb-pseudo-styles="hover--button"]',
        '[data-sb-pseudo-styles="hover--button"] > button',
      ],
      focusWithin: [
        '[data-sb-pseudo-styles="focus"]',
        '[data-sb-pseudo-styles="focus--button"]',
      ],
      focus: [
        '[data-sb-pseudo-styles="focus"] > button',
        '[data-sb-pseudo-styles="focus--button"] > button',
      ],
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
  parameters: { textDirection: "rtl" },
}
