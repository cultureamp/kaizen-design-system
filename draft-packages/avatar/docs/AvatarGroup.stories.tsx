import React from "react"
import { withDesign } from "storybook-addon-designs"
import { AvatarGroup, AvatarList } from "../KaizenDraft/Avatar/AvatarGroup"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

import avatarGroupData from "./avatarGroupData.json"

export default {
  title: `${CATEGORIES.components}/Avatar/Avatar Group`,
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component: 'import { AvatarGroup } from "@kaizen/draft-avatar"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14305"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => <AvatarGroup {...args} />
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  maxVisible: 2,
  size: "medium",
  avatars: avatarGroupData["users"],
}

export const StickerSheetDefault = () => {
  const data = avatarGroupData["users"] as AvatarList
  return (
    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Deafult"]} />
      <StoryWrapper.Row rowTitle="Large">
        <AvatarGroup maxVisible={2} avatars={data} size="large" />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Medium">
        <AvatarGroup maxVisible={2} avatars={data} size="medium" />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Small">
        <AvatarGroup maxVisible={2} avatars={data} size="small" />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
