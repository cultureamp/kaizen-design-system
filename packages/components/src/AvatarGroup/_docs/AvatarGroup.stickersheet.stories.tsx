import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { AvatarGroup, AvatarGroupSize } from "../index"
import { AVATARS, EXAMPLE_USER_1, EXAMPLE_USER_2 } from "./example-data"

export default {
  title: "Components/Avatar/Avatar Group",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ROWS: Array<{ title: string; size: AvatarGroupSize }> = [
  { title: "Large", size: "large" },
  { title: "Medium", size: "medium" },
  { title: "Small", size: "small" },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={[
          "With counter",
          "Without counter",
          "With counter (RTL)",
          "Without counter (RTL)",
        ]}
      />
      <StickerSheet.Body>
        {ROWS.map(({ title, size }) => (
          <StickerSheet.Row key={title} rowTitle={title}>
            <AvatarGroup maxVisible={2} avatars={AVATARS} size={size} />

            <AvatarGroup
              maxVisible={2}
              avatars={[EXAMPLE_USER_1, EXAMPLE_USER_2]}
              size={size}
            />
          </StickerSheet.Row>
        ))}
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
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
