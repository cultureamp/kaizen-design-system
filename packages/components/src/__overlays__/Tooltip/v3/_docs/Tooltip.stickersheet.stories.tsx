import React from "react"
import { Meta, composeStories } from "@storybook/react"
import { ReversedColors } from "~components/__utilities__/v3"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { mergeClassNames } from "~utils/mergeClassNames"
import * as stories from "../Tooltip.spec.stories"

export default {
  title: "Overlays/Tooltip/v3/Sticker Sheets",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const Stories = composeStories(stories)

export const Standard: StickerSheetStory = {
  name: "Sticker Sheet (Default)",
  render: args => (
    <div className="grid gap-x-128 gap-y-128 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Object.values(Stories).map((Story, index) => (
        <div
          key={index}
          className={mergeClassNames(
            "flex items-center justify-center min-h-[10rem]",
            Story.parameters.reverseColors ? "bg-purple-700" : ""
          )}
        >
          <ReversedColors isReversed={!!Story.parameters.reverseColors}>
            <Story {...args} defaultOpen={true} />
          </ReversedColors>
        </div>
      ))}
    </div>
  ),
}

export const StickerSheetRTL: StickerSheetStory = {
  ...Standard,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...Standard.parameters,
    textDirection: "rtl",
  },
}
