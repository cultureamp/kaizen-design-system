import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { TagIcon } from "~components/Icons"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Tag, TagColors } from "../Tag"

type ListProps = {
  children: React.ReactNode
}
const List = ({ children }: ListProps): JSX.Element => (
  <div className="flex flex-col gap-12 items-start">{children}</div>
)

export default {
  title: "Components/Tag",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const colors: TagColors[] = [
  "gray",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
]
const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet heading="Tag">
      <StickerSheet.Header headings={["Label Only", "Icon"]} />
      <StickerSheet.Body>
        {colors.map(color => (
          <StickerSheet.Row>
            <Tag color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Tag>
            <Tag icon={<TagIcon role="presentation" />} color={color}>
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
