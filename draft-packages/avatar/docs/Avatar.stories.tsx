import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  Avatar,
  AvatarSizes,
  CompanyAvatarProps,
  GenericAvatarProps,
} from "../../avatar/KaizenDraft/Avatar/Avatar"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const PROPS_PHOTO_PERSONAL: GenericAvatarProps = {
  fullName: "Jane Doe",
  disableInitials: false,
  isCurrentUser: true,
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
}

const PROPS_INITIALS_PERSONAL: GenericAvatarProps = {
  fullName: "Jane Doe",
  disableInitials: false,
  isCurrentUser: true,
}

const PROPS_INITIALS_GENERIC: GenericAvatarProps = {
  fullName: "Jane Doe",
  disableInitials: false,
  isCurrentUser: false,
}

const PROPS_INITIALS_UNICODE: GenericAvatarProps = {
  fullName: "李存信",
  disableInitials: false,
  isCurrentUser: true,
}

const PROPS_INITIALS_LONG: GenericAvatarProps = {
  fullName:
    "Spicy Jalapeno Taco Bacon Ipsum Pretzel Dolor Amet Nacho Elit Chicken",
  disableInitials: false,
  isCurrentUser: true,
}

const PROPS_COMPANY: CompanyAvatarProps = {
  fullName: "Hooli",
  avatarSrc:
    "https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg",
  isCompany: true,
}

export default {
  title: `${CATEGORIES.components}/Avatar/Avatar`,
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'import { Avatar } from "@kaizen/draft-avatar"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14305"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => <Avatar {...args} />
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  fullName: "Jane Doe",
  disableInitials: false,
  isCompany: false,
  isCurrentUser: false,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const ROWS: Array<{ title: string; size: AvatarSizes }> = [
    { title: "XX-Large", size: "xxlarge" },
    { title: "X-Large", size: "xlarge" },
    { title: "Large", size: "large" },
    { title: "Medium", size: "medium" },
    { title: "Small", size: "small" },
  ]

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={[
            "Photo Personal",
            "Intials Personal",
            "Initals Generic",
            "Default User",
          ]}
        />
        {ROWS.map(({ title, size }) => (
          <StoryWrapper.Row key={title} rowTitle={title}>
            <Avatar {...PROPS_PHOTO_PERSONAL} size={size} />
            <Avatar {...PROPS_INITIALS_PERSONAL} size={size} />
            <Avatar {...PROPS_INITIALS_GENERIC} size={size} />
            <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size={size} />
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>

      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Initals Unicode", "Initals Long", "Company Avatar"]}
        />
        {ROWS.map(({ title, size }) => (
          <StoryWrapper.Row key={title} rowTitle={title}>
            <Avatar {...PROPS_INITIALS_UNICODE} size={size} />
            <Avatar {...PROPS_INITIALS_LONG} size={size} />
            <Avatar {...PROPS_COMPANY} size={size} />
          </StoryWrapper.Row>
        ))}
      </StoryWrapper>
    </>
  )
}

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
