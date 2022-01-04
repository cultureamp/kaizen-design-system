import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { Avatar, AvatarProps } from "../../avatar/KaizenDraft/Avatar/Avatar"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

// Data
import avatarStoryData from "./avatarData.json"

export default {
  title: `${CATEGORIES.components}/Avatar/Avatar`,
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'import { Avatar } from "@kaizen/draft-avatar". For the company variant, please refer Company Avatar Story for how to use the `isCompany` prop.',
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

export const DesignSheetDefault = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData["users"].map(story => (
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
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData["users"].map(story => (
      <div>
        <Heading color="white" tag="h2" variant="heading-2">
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

export const InitialsLong = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData["initials-long"].map(story => (
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

export const InitialsUnicode = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData["initials-unicode"].map(story => (
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
