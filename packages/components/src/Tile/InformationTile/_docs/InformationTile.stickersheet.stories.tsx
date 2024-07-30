import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { moodsList } from "../../subcomponents/GenericTile/types"
import { InformationTile } from "../index"

export default {
  title: "Components/Tiles/InformationTile",
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
            <InformationTile
              mood={mood === "default" ? undefined : mood}
              title="Title"
              metadata="Side A"
              information="Side B"
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
