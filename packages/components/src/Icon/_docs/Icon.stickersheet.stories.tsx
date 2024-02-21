import React from "react"
import { Meta } from "@storybook/react"
import * as ICONS from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"

export default {
  title: "Components/Icons",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} as Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet heading="Icons">
      <StickerSheet.Header
        headings={["Default", "Color"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {Object.keys(ICONS).map(iconName => {
          const icon = ICONS[iconName as keyof typeof ICONS]({
            role: "presentation",
          })
          return (
            <StickerSheet.Row key={iconName} rowTitle={iconName}>
              {icon}
              <StickerSheet.Cell className="kz-text-green-400">
                {icon}
              </StickerSheet.Cell>
            </StickerSheet.Row>
          )
        })}
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
