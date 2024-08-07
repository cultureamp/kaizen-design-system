import React from "react"
import { Meta } from "@storybook/react"
import { moodsList } from "~components/Tile/subcomponents/GenericTile/types"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiActionTile } from "../index"

export default {
  title: "Components/Tiles/MultiActionTile",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Body>
        {(["default", ...moodsList] as const).map(mood => (
          <StickerSheet.Row key={mood} rowTitle={mood}>
            <MultiActionTile
              mood={mood === "default" ? undefined : mood}
              title="Title"
              metadata="Side A"
              information="Side B"
              primaryAction={{
                label: "Take Action!",
              }}
              secondaryAction={{
                label: "Nevermind",
              }}
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
