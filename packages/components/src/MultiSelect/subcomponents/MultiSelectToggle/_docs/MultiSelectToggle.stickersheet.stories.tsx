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
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      {/* This is for a11y; not example of how to actually use this */}
      <div style={{ display: "none" }}>
        <span id="id--label">Label</span>
        <div id="id--popover"></div>
      </div>

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
              classNameOverride="story__multi-select__toggle--hover"
            />
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              classNameOverride="story__multi-select__toggle--focus"
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Toggle Button">
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              classNameOverride="story__multi-select__toggle-button--hover"
            />
            <MultiSelectToggle
              selectedOptions={[]}
              aria-labelledby="id--label"
              aria-controls="id--popover"
              onClick={() => undefined}
              classNameOverride="story__multi-select__toggle-button--focus"
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
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
