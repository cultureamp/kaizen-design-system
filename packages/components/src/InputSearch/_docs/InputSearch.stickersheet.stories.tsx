import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { InputSearch } from "../index"

export default {
  title: "Components/InputSearch",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Default", "Hover", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <InputSearch
            id="input-search--default"
            aria-label="Search"
            reversed={isReversed}
          />
          <InputSearch
            id="input-search--hover"
            aria-label="Search"
            reversed={isReversed}
            classNameOverride="story__input-search--hover"
          />
          <InputSearch
            id="input-search--focus"
            aria-label="Search"
            reversed={isReversed}
            classNameOverride="story__input-search--focus"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: ".story__input-search--hover",
      focusWithin: ".story__input-search--focus",
      focus: ".story__input-search--focus > input",
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
