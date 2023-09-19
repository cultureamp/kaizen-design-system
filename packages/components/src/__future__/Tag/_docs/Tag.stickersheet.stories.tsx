import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { TagIcon } from "~components/Icons"
import { StickerSheet } from "~storybook/components/StickerSheet"
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
const StickerSheetTemplate: StoryFn = () => (
  <StickerSheet heading="Tag">
    <StickerSheet.Header headings={["Label Only", "Icon"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <List>
          {colors.map(color => (
            <Tag color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Tag>
          ))}
        </List>
        <List>
          {colors.map(color => (
            <Tag icon={<TagIcon role="presentation" />} color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Tag>
          ))}
        </List>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
  textDirection: "rtl",
}
