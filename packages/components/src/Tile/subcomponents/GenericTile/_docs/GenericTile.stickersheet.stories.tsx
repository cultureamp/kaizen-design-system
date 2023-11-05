import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { GenericTile } from "../index"
import { moodsList } from "../types"

export default {
  title: "Components/Tiles/GenericTile",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        {moodsList.map(mood => (
          <StickerSheet.Row key={mood} rowTitle={mood}>
            <GenericTile
              mood={mood}
              title="Title"
              metadata="metadata"
              information="string"
              footer={<>Footer</>}
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
