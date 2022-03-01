import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { AvatarGroup, AvatarList } from "../KaizenDraft/Avatar/AvatarGroup"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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

const EXAMPLE_USER_1 = {
  fullName: "Adirana Aniseed",
  disableInitials: false,
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  isCurrentUser: false,
}
const EXAMPLE_USER_2 = {
  fullName: "Bethany Blueberry",
  disableInitials: false,
  isCurrentUser: false,
}
const EXAMPLE_USER_3 = {
  fullName: "Carey Cringle",
  disableInitials: false,
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  isCurrentUser: false,
}
const EXAMPLE_USER_4 = {
  fullName: "Derrick Doolittle",
  disableInitials: false,
  isCurrentUser: false,
}
const EXAMPLE_USER_5 = {
  fullName: "Evan Eavesdrop",
  disableInitials: false,
  isCurrentUser: false,
}
const EXAMPLE_USER_6 = {
  fullName: "Fern Furlow",
  disableInitials: false,
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  isCurrentUser: false,
}

const AVATARS: AvatarList = [
  EXAMPLE_USER_1,
  EXAMPLE_USER_2,
  EXAMPLE_USER_3,
  EXAMPLE_USER_4,
  EXAMPLE_USER_5,
  EXAMPLE_USER_6,
]

export const DefaultStory = args => <AvatarGroup {...args} />

DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  maxVisible: 2,
  size: "medium",
  avatars: AVATARS,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default"]} />
    <StoryWrapper.Row rowTitle="Large">
      <AvatarGroup maxVisible={2} avatars={AVATARS} size="large" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Medium">
      <AvatarGroup maxVisible={2} avatars={AVATARS} size="medium" />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Small">
      <AvatarGroup maxVisible={2} avatars={AVATARS} size="small" />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
