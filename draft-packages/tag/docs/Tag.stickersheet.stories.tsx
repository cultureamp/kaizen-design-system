import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { Avatar } from "../../avatar"
import { Tag } from "../index"

export default {
  title: "Stickersheets/Tag",
} satisfies Meta<typeof Tag>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["", "Default", "Live", "Draft", "Action", "Closed"]}
      />
      <StickerSheet.Row rowTitle="Status (md)">
        <Tag variant="default" size="medium">
          Report
        </Tag>
        <Tag variant="statusLive" size="medium">
          Live
        </Tag>
        <Tag variant="statusDraft" size="medium">
          Draft
        </Tag>
        <Tag variant="statusAction" size="medium">
          Ready for review
        </Tag>
        <Tag variant="statusClosed" size="medium">
          Closed
        </Tag>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Status (sm)">
        <Tag variant="default" size="small">
          Report
        </Tag>
        <Tag variant="statusLive" size="small">
          Live
        </Tag>
        <Tag variant="statusDraft" size="small">
          Draft
        </Tag>
        <Tag variant="statusAction" size="small">
          Ready for review
        </Tag>
        <Tag variant="statusClosed" size="small">
          Closed
        </Tag>
      </StickerSheet.Row>
    </StickerSheet>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["", "Neutral", "Positive", "Negative"]} />
      <StickerSheet.Row rowTitle="Sentiment (md)">
        <Tag variant="sentimentNeutral" size="medium">
          Neutral
        </Tag>
        <Tag variant="sentimentPositive" size="medium">
          Positive
        </Tag>
        <Tag variant="sentimentNegative" size="medium">
          Negative
        </Tag>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Sentiment (sm)">
        <Tag variant="sentimentNeutral" size="small">
          Neutral
        </Tag>
        <Tag variant="sentimentPositive" size="small">
          Positive
        </Tag>
        <Tag variant="sentimentNegative" size="small">
          Negative
        </Tag>
      </StickerSheet.Row>
    </StickerSheet>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["", "Informative", "Positive", "Negative", "Cautionary"]}
      />
      <StickerSheet.Row rowTitle="Validation (md)">
        <Tag variant="validationInformative" size="medium">
          Informative
        </Tag>
        <Tag variant="validationPositive" size="medium">
          Positive
        </Tag>
        <Tag variant="validationNegative" size="medium">
          Negative
        </Tag>
        <Tag variant="validationCautionary" size="medium">
          Cautionary
        </Tag>
      </StickerSheet.Row>
    </StickerSheet>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["", "Base"]} />
      <StickerSheet.Row rowTitle="Profile (md)">
        <Tag
          variant="profile"
          avatar={
            <Avatar
              size="small"
              avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
              fullName="Jane Doe"
            />
          }
          dismissible
        >
          Jane Doe
        </Tag>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Profile (md - no avatar)">
        <Tag variant="profile" avatar={{}} dismissible>
          Jane Doe
        </Tag>
      </StickerSheet.Row>
    </StickerSheet>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Row rowTitle="Dismissible (sm)">
        <Tag variant="default" size="small" dismissible>
          Base
        </Tag>
      </StickerSheet.Row>
    </StickerSheet>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
