import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { assetUrl } from "@kaizen/hosted-assets"
import { Avatar, AvatarProps } from "@kaizen/draft-avatar"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

// Data
import avatarStoryData from "./avatarData.json"

export default {
  title: `${CATEGORIES.components}/Avatar`,
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
  size: "xlarge",
  disableInitials: false,
  isCompany: false,
  isCurrentUser: false,
}

export const DesignSheetDefault = () => (
  /**
   * This displays a list of all main variants on a default background.
   */
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData.map(story => (
      <div>
        <Heading tag="h2" variant="heading-2">
          {story.title}
        </Heading>
        <br />
        {(story.stories as AvatarProps[]).map((storyData: AvatarProps) => {
          const avatarProps = storyData as AvatarProps
          return (
            <>
              <Avatar {...avatarProps} />
              <br />
            </>
          )
        })}
      </div>
    ))}
  </div>
)

DesignSheetDefault.storyName = "Design Sheet (default)"

export const DesignSheetReversed = () => (
  /**
   * This displays a list of all main variants on a reversed background
   */
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData.map(story => (
      <div>
        <Heading tag="h2" variant="heading-2" color="white">
          {story.title}
        </Heading>
        <br />
        {(story.stories as AvatarProps[]).map((storyData: AvatarProps) => {
          const avatarProps = storyData as AvatarProps
          return (
            <>
              <Avatar {...avatarProps} />
              <br />
            </>
          )
        })}
      </div>
    ))}
  </div>
)

DesignSheetReversed.storyName = "Design Sheet (reversed)"
DesignSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

export const InitialsUnicode = () => (
  <>
    <Avatar isCurrentUser={false} size="xxlarge" fullName="李存信" />
    <br />
    <Avatar isCurrentUser={false} size="xlarge" fullName="李存信" />
    <br />
    <Avatar isCurrentUser={false} size="large" fullName="李存信" />
    <br />
    <Avatar isCurrentUser={false} size="medium" fullName="李存信" />
    <br />
    <Avatar isCurrentUser={false} size="small" fullName="李存信" />
  </>
)

export const InitialsLong = () => (
  <>
    <Avatar size="xxlarge" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="xlarge" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="large" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="medium" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="small" fullName="Very Long Name Which Shows Initials" />
  </>
)
