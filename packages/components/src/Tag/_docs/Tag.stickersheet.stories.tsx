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
    parameters: {
      a11y: {
        config: {
          rules: [
            {
              // Known issue as we do not have a "presentational" Avatar yet
              // But the use case in this stickersheet is valid.
              id: "image-redundant-alt",
              enabled: false,
            },
          ],
        },
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["Default", "Dismissable"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <>
          {TagVariants.map(variant => (
            <StickerSheet.Row key={variant} rowTitle={variant}>
              <>
                <Tag variant={variant}>Tag</Tag>
                <Tag variant={variant} size="small">
                  Small
                </Tag>
              </>
              <>
                <Tag variant={variant} dismissible={variant !== "statusLive"}>
                  Tag
                </Tag>
                <Tag
                  variant={variant}
                  size="small"
                  dismissible={variant !== "statusLive"}
                >
                  Small
                </Tag>
              </>
            </StickerSheet.Row>
          ))}
        </>
        <StickerSheet.Row rowTitle="Avatar">
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
