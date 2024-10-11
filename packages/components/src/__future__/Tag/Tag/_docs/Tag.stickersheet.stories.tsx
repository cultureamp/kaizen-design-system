import React from "react"
import { Meta } from "@storybook/react"
import { Icon } from "~components/__future__/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Tag } from "../Tag"
import { TagColorKeys } from "../types"

export default {
  title: "Components/Tag/Future",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet heading="Tag">
      <StickerSheet.Header headings={["Label Only", "Icon"]} />
      <StickerSheet.Body>
        {TagColorKeys.map(color => (
          <StickerSheet.Row key={color}>
            <Tag color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Tag>
            <Tag
              icon={<Icon name="label" isPresentational isFilled />}
              color={color}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Tag>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
  parameters: {
    controls: { disable: true },
  },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
