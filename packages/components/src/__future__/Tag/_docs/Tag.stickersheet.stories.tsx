import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { TagIcon } from "~components/Icons"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Tag } from "../Tag"

type ListProps = {
  children: React.ReactNode
}
const List = ({ children }: ListProps): JSX.Element => (
  <div className="flex flex-col gap-12 items-start">{children}</div>
)

export default {
  title: "KAIO-staging/Tag",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StoryFn = () => (
  <StickerSheet heading="Tag">
    <StickerSheet.Header headings={["Label Only", "Icon"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <List>
          <Tag>Gray</Tag>
          <Tag color="blue">Blue</Tag>
          <Tag color="green">Green</Tag>
          <Tag color="yellow">Yellow</Tag>
          <Tag color="orange">Orange</Tag>
          <Tag color="red">Red</Tag>
          <Tag color="purple">Purple</Tag>
        </List>
        <List>
          <Tag icon={<TagIcon role="presentation" />}>Gray</Tag>
          <Tag color="blue" icon={<TagIcon role="presentation" />}>
            Blue
          </Tag>
          <Tag color="green" icon={<TagIcon role="presentation" />}>
            Green
          </Tag>
          <Tag color="yellow" icon={<TagIcon role="presentation" />}>
            Yellow
          </Tag>
          <Tag color="orange" icon={<TagIcon role="presentation" />}>
            Orange
          </Tag>
          <Tag color="red" icon={<TagIcon role="presentation" />}>
            Red
          </Tag>
          <Tag color="purple" icon={<TagIcon role="presentation" />}>
            Purple
          </Tag>
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
