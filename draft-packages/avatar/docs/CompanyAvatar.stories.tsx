import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { assetUrl } from "@kaizen/hosted-assets"
import { Avatar, AvatarProps } from "../KaizenDraft/Avatar/Avatar"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

// Data
import avatarStoryData from "./avatarData.json"

export default {
  title: `${CATEGORIES.components}/Avatar/Company Avatar`,
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'import { Avatar } from "@kaizen/draft-avatar". This uses the same componentary as the regular `<Avatar />` but the props: `fullname`, `avatarSrc` and `isCompany` are strictly typed to ensure neccessary data is available.',
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
  avatarSrc: assetUrl("third-party-logos/hooli-logo.svg"),
  fullName: "Hooli",
  size: "xlarge",
  isCompany: true,
}

DefaultStory.parameters = {
  controls: { exclude: ["disableInitials", "isCurrentUser"] },
}

export const DesignSheetDefault = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
      gap: "2.5rem",
    }}
  >
    {avatarStoryData["company"].map(story => (
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
    {avatarStoryData["company"].map(story => (
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
