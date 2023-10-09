import React from "react"
import { Meta } from "@storybook/react"
import * as ICONS from "~components/Icons"
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
    <>
      <StickerSheet heading="Icons">
        <StickerSheet.Header headings={["LTR", "RTL"]} hasVerticalHeadings />
        <StickerSheet.Body>
          {Object.keys(ICONS as Record<string, any>).map(iconName => {
            const Icon = ICONS[iconName as keyof typeof ICONS]
            return (
              <StickerSheet.Row key={iconName} rowTitle={iconName}>
                <StickerSheet.Cell>
                  <Icon role="presentation" />
                </StickerSheet.Cell>
                <StickerSheet.Cell dir="rtl">
                  <Icon role="presentation" />
                </StickerSheet.Cell>
              </StickerSheet.Row>
            )
          })}
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
