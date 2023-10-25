import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { LoadingParagraph } from "../index"

export default {
  title: "Components/Loading states/LoadingParagraph",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <StickerSheet.Cell className="w-320">
            <LoadingParagraph isReversed={isReversed} />
          </StickerSheet.Cell>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="isLink">
          <LoadingParagraph isLink isReversed={isReversed} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="isInline + isInline">
          <StickerSheet.Cell>
            <LoadingParagraph isInline width={40} isReversed={isReversed} />
            <LoadingParagraph isInline width={40} isReversed={isReversed} />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
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
