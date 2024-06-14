import React from "react"
import { Meta } from "@storybook/react"
import { Text } from "~components/Text"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Modal } from "../"

export default {
  title: "Overlays/Modal/v3",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet>
        <StickerSheet.Header
          headings={["Solid Border", "Dashed Border", "None"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Modal>
              <Text variant="body">
                Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa
                drumstick fatback cow tongue ground round chicken. Jowl cow
                short ribs, ham tongue turducken spare ribs pig drumstick chuck
                meatball. Buffalo turducken pancetta tail salami chicken.
                Bresaola venison pastrami beef.
              </Text>
            </Modal>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
