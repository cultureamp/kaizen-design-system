import React from "react"
import { Meta, composeStories } from "@storybook/react"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
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
        <div key={index} className="flex items-center justify-center">
          <Story {...args} defaultOpen={true} />
        </div>
      ))}
    </div>
  ),
}

export const StickerSheetReversed: StickerSheetStory = {
  ...Standard,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...Standard.parameters,
    reverseColors: true,
  },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...Standard,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...Standard.parameters,
    textDirection: "rtl",
  },
}
