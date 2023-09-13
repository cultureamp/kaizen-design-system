import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelect } from "../index"

export default {
  title: "Components/MultiSelect",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        isReversed={isReversed}
        heading="MultiSelect"
        className="w-full"
      >
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <MultiSelect />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Open">
            {/* @TODO: Update this */}
            <MultiSelect />
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
            <MultiSelect classNameOverride="story__multi-select__toggle--hover" />
            <MultiSelect classNameOverride="story__multi-select__toggle--focus" />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Toggle Button">
            <MultiSelect classNameOverride="story__multi-select__toggle-button--hover" />
            <MultiSelect classNameOverride="story__multi-select__toggle-button--focus" />
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
