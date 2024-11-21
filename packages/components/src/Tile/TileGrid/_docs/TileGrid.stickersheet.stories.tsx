import React from "react"
import { Meta } from "@storybook/react"
import { InformationTile } from "~components/Tile"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TileGrid } from "../index"

export default {
  title: "Components/Tiles/TileGrid",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet layout="stretch">
      <StickerSheet.Row header="One row">
        <TileGrid>
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
        </TileGrid>
      </StickerSheet.Row>
      <StickerSheet.Row header="Two rows">
        <TileGrid>
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
        </TileGrid>
      </StickerSheet.Row>
      <StickerSheet.Row header="Partial complete rows">
        <TileGrid>
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
          <InformationTile
            title="Title"
            metadata="Side A"
            information="Side B"
            footer={<>Footer</>}
          />
        </TileGrid>
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
