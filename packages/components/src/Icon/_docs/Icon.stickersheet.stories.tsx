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
      <StickerSheet.Header headings={["Icon", "Name"]} />
      <StickerSheet.Body>
        {Object.keys(ICONS as { [key: string]: any }).map(iconKey => (
          <StickerSheet.Row key={iconKey}>
            {ICONS[iconKey as keyof typeof ICONS]({ role: "presentation" })}
            <p className="font-family-heading">{iconKey}</p>
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
