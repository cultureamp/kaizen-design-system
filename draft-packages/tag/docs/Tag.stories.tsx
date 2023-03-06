import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { Avatar } from "@kaizen/draft-avatar"
import { Tag } from "@kaizen/draft-tag"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'import { Tag } from "@kaizen/draft-tag"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A90332"
    ),
  },
}

export const DefaultStory: ComponentStory<typeof Tag> = args => (
  <Tag variant="default" {...args}>
    Default
  </Tag>
)
DefaultStory.storyName = "Tag"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        gridColumns={6}
        headings={["Default", "Live", "Draft", "Action", "Closed"]}
      />
      <StoryWrapper.Row gridColumns={6} rowTitle="Status (md)">
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
      </StoryWrapper.Row>
      <StoryWrapper.Row gridColumns={6} rowTitle="Status (sm)">
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
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        gridColumns={10}
        headings={["Neutral", "Positive", "Negative"]}
      />
      <StoryWrapper.Row gridColumns={10} rowTitle="Sentiment (md)">
        <Tag variant="sentimentNeutral" size="medium">
          Neutral
        </Tag>
        <Tag variant="sentimentPositive" size="medium">
          Positive
        </Tag>
        <Tag variant="sentimentNegative" size="medium">
          Negative
        </Tag>
      </StoryWrapper.Row>
      <StoryWrapper.Row gridColumns={10} rowTitle="Sentiment (sm)">
        <Tag variant="sentimentNeutral" size="small">
          Neutral
        </Tag>
        <Tag variant="sentimentPositive" size="small">
          Positive
        </Tag>
        <Tag variant="sentimentNegative" size="small">
          Negative
        </Tag>
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={["Informative", "Positive", "Negative", "Cautionary"]}
        gridColumns={7}
      />
      <StoryWrapper.Row gridColumns={7} rowTitle="Validation (md)">
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
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader gridColumns={10} headings={["Base"]} />
      <StoryWrapper.Row gridColumns={10} rowTitle="Profile (md)">
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
      </StoryWrapper.Row>
      <StoryWrapper.Row gridColumns={10} rowTitle="Profile (md - no avatar)">
        <Tag variant="profile" avatar={{}} dismissible>
          Jane Doe
        </Tag>
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row gridColumns={10} rowTitle="Dismissible (sm)">
        <Tag variant="default" size="small" dismissible>
          Base
        </Tag>
      </StoryWrapper.Row>
    </StoryWrapper>
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
