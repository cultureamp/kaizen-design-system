import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  AvatarGroup,
  AvatarGroupSize,
  AvatarList,
  AvatarGroupAvatarProps,
} from "../KaizenDraft/Avatar/AvatarGroup"

const EXAMPLE_USER_1: AvatarGroupAvatarProps = {
  fullName: "Adirana Appleseed",
  disableInitials: false,
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  isCurrentUser: false,
}
const EXAMPLE_USER_2: AvatarGroupAvatarProps = {
  fullName: "Bethany Blueberry",
  disableInitials: false,
  isCurrentUser: false,
}
const EXAMPLE_USER_3: AvatarGroupAvatarProps = {
  fullName: "Carey Cringle",
  disableInitials: false,
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  isCurrentUser: false,
}
const EXAMPLE_USER_4: AvatarGroupAvatarProps = {
  fullName: "Derrick Doolittle",
  disableInitials: false,
  isCurrentUser: false,
}
const EXAMPLE_USER_5: AvatarGroupAvatarProps = {
  fullName: "Evan Eavesdrop",
  disableInitials: false,
  isCurrentUser: false,
}
const EXAMPLE_USER_6: AvatarGroupAvatarProps = {
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

export default {
  title: "Components/Avatar/Avatar Group",
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
} as ComponentMeta<typeof AvatarGroup>

export const DefaultStory: ComponentStory<typeof AvatarGroup> = args => (
  <AvatarGroup {...args} />
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  maxVisible: 2,
  size: "medium",
  avatars: AVATARS,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const ROWS: Array<{ title: string; size: AvatarGroupSize }> = [
    { title: "Large", size: "large" },
    { title: "Medium", size: "medium" },
    { title: "Small", size: "small" },
  ]

  return (
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={[
          "With counter",
          "Without counter",
          "With counter (RTL)",
          "Without counter (RTL)",
        ]}
      />
      {ROWS.map(({ title, size }) => (
        <StoryWrapper.Row key={title} rowTitle={title}>
          <AvatarGroup maxVisible={2} avatars={AVATARS} size={size} />

          <AvatarGroup
            maxVisible={2}
            avatars={[EXAMPLE_USER_1, EXAMPLE_USER_2]}
            size={size}
          />

          <div dir="rtl">
            <AvatarGroup maxVisible={2} avatars={AVATARS} size={size} />
          </div>

          <div dir="rtl">
            <AvatarGroup
              maxVisible={2}
              avatars={[EXAMPLE_USER_1, EXAMPLE_USER_2]}
              size={size}
            />
          </div>
        </StoryWrapper.Row>
      ))}
    </StoryWrapper>
  )
}

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
