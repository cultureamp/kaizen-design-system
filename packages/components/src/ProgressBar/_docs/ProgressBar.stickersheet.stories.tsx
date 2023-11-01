import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ProgressBar } from "../index"

export default {
  title: "Components/ProgressBar",
  parameters: {
    chromatic: { disable: false, pauseAnimationAtEnd: true },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed = false }) => (
    <StickerSheet className="w-full" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Positive" rowTitleWidth="100px">
          <ProgressBar
            value={25}
            max={100}
            mood="positive"
            isAnimating={false}
            label="25%"
            subtext="Subtext"
            isReversed={isReversed}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Informative">
          <ProgressBar
            value={25}
            max={100}
            mood="informative"
            isAnimating={false}
            label="25%"
            subtext="Subtext"
            isReversed={isReversed}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Negative">
          <ProgressBar
            value={25}
            max={100}
            mood="negative"
            isAnimating={false}
            label="25%"
            subtext="Subtext"
            isReversed={isReversed}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Cautionary">
          <ProgressBar
            value={25}
            max={100}
            mood="cautionary"
            isAnimating={false}
            label="25%"
            subtext="Subtext"
            isReversed={isReversed}
          />
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
    textDirection: "rtl",
  },
}
