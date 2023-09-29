import React from "react"
import { Meta } from "@storybook/react"
import { Avatar } from "~components/Avatar"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Tag } from "../index"
import { TagVariants } from "../types"

export default {
  title: "KAIO-staging/Tag",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["Default (Medium)", "Small"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {TagVariants.map(variant => (
          <StickerSheet.Row key={variant} rowTitle={variant}>
            <Tag variant={variant}>Tag</Tag>
            <Tag variant={variant} size="small">
              Tag
            </Tag>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
      <StickerSheet.Header headings={["Avatar"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Tag
            variant="profile"
            avatar={
              <Avatar
                size="small"
                avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
                fullName="Jane Doe"
              />
            }
          >
            Jane Doe
          </Tag>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
