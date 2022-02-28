import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Avatar } from "../../avatar/KaizenDraft/Avatar/Avatar"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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
DefaultStory.parameters = { controls: { exclude: ["isCompany"] } }

export const StickerSheetDefault = () => {
  const PROPS_PHOTO_PERSONAL = {
    fullName: "Jane Doe",
    disableInitials: false,
    isCurrentUser: true,
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  }

  const PROPS_INITIALS_PERSONAL = {
    fullName: "Jane Doe",
    disableInitials: false,
    isCurrentUser: true,
  }

  const PROPS_INITIALS_GENERIC = {
    fullName: "Jane Doe",
    disableInitials: false,
    isCurrentUser: false,
  }

  const PROPS_INITIALS_INICODE = {
    fullName: "李存信",
    disableInitials: false,
    isCurrentUser: true,
  }

  const PROPS_INITIALS_LONG = {
    fullName:
      "Spicy Jalapeno Taco Bacon Ipsum Pretzel Dolor Amet Nacho Elit Chicken",
    disableInitials: false,
    isCurrentUser: true,
  }

  const PROPS_COMPANY = {
    fullName: "Hooli",
    avatarSrc:
      "https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg",
    isCompany: true,
  }

  return (
    <>
      <StoryWrapper>
        <StoryWrapper.RowHeader
          headings={[
            "Photo Personal",
            "Intials Personal",
            "Initals Generic",
            "Default User",
          ]}
        />
        <StoryWrapper.Row rowTitle="XX-Large">
          <Avatar {...PROPS_PHOTO_PERSONAL} size="xxlarge" />
          <Avatar {...PROPS_INITIALS_PERSONAL} size="xxlarge" />
          <Avatar {...PROPS_INITIALS_GENERIC} size="xxlarge" />
          <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size="xxlarge" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="X-Large">
          <Avatar {...PROPS_PHOTO_PERSONAL} size="xlarge" />
          <Avatar {...PROPS_INITIALS_PERSONAL} size="xlarge" />
          <Avatar {...PROPS_INITIALS_GENERIC} size="xlarge" />
          <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size="xlarge" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Large">
          <Avatar {...PROPS_PHOTO_PERSONAL} size="large" />
          <Avatar {...PROPS_INITIALS_PERSONAL} size="large" />
          <Avatar {...PROPS_INITIALS_GENERIC} size="large" />
          <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size="large" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Medium">
          <Avatar {...PROPS_PHOTO_PERSONAL} size="medium" />
          <Avatar {...PROPS_INITIALS_PERSONAL} size="medium" />
          <Avatar {...PROPS_INITIALS_GENERIC} size="medium" />
          <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size="medium" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Small">
          <Avatar {...PROPS_PHOTO_PERSONAL} size="small" />
          <Avatar {...PROPS_INITIALS_PERSONAL} size="small" />
          <Avatar {...PROPS_INITIALS_GENERIC} size="small" />
          <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size="small" />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper>
        <StoryWrapper.RowHeader
          headings={["Initals Unicode", "Initals Long", "Company Avatar"]}
        />
        <StoryWrapper.Row rowTitle="XX-Large">
          <Avatar {...PROPS_INITIALS_INICODE} size="xxlarge" />
          <Avatar {...PROPS_INITIALS_LONG} size="xxlarge" />
          <Avatar {...PROPS_COMPANY} size="xxlarge" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="X-Large">
          <Avatar {...PROPS_INITIALS_INICODE} size="xlarge" />
          <Avatar {...PROPS_INITIALS_LONG} size="xlarge" />
          <Avatar {...PROPS_COMPANY} size="xlarge" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Large">
          <Avatar {...PROPS_INITIALS_INICODE} size="large" />
          <Avatar {...PROPS_INITIALS_LONG} size="large" />
          <Avatar {...PROPS_COMPANY} size="large" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Medium">
          <Avatar {...PROPS_INITIALS_INICODE} size="medium" />
          <Avatar {...PROPS_INITIALS_LONG} size="medium" />
          <Avatar {...PROPS_COMPANY} size="medium" />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Small">
          <Avatar {...PROPS_INITIALS_INICODE} size="small" />
          <Avatar {...PROPS_INITIALS_LONG} size="small" />
          <Avatar {...PROPS_COMPANY} size="small" />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
