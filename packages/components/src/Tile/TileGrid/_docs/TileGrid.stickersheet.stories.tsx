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
    <StickerSheet>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="One row">
          <StickerSheet.Cell width={1000}>
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
          </StickerSheet.Cell>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Two rows">
          <StickerSheet.Cell width={1000}>
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
          </StickerSheet.Cell>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Partial complete rows">
          <StickerSheet.Cell width={1000}>
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
