import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { moodsList } from "../../subcomponents/GenericTile/types"
import { MultiActionTile } from "../index"

export default {
  title: "Containers/MultiActionTile/v1",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Body>
        {moodsList.map(mood => (
          <StickerSheet.Row key={mood} rowTitle={mood}>
            <MultiActionTile
              mood={mood}
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
