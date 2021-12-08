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
  size: "xlarge",
  isCurrentUser: false,
  DisabledInitials: false,
  avatarSrc: "",
  fullName: "",
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

export const InitialsPersonal = () => (
  <>
    <Avatar size="xxlarge" fullName="John Smith" />
    <br />
    <Avatar size="xlarge" fullName="John Smith" />
    <br />
    <Avatar size="large" fullName="John Smith" />
    <br />
    <Avatar size="medium" fullName="John Smith" />
    <br />
    <Avatar size="small" fullName="John Smith" />
  </>
)

export const InitialsGeneric = () => (
  <>
    <Avatar isCurrentUser={false} size="xxlarge" fullName="Jane Doe" />
    <br />
    <Avatar isCurrentUser={false} size="xlarge" fullName="Jane Doe" />
    <br />
    <Avatar isCurrentUser={false} size="large" fullName="Jane Doe" />
    <br />
    <Avatar isCurrentUser={false} size="medium" fullName="Jane Doe" />
    <br />
    <Avatar isCurrentUser={false} size="small" fullName="Jane Doe" />
  </>
)

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

export const Fallback = () => (
  <>
    <Avatar size="xxlarge" avatarSrc="broken" fullName="Jane Doe" />
    <br />
    <Avatar size="xlarge" avatarSrc="broken" fullName="Jane Doe" />
    <br />
    <Avatar size="large" avatarSrc="broken" fullName="Jane Doe" />
    <br />
    <Avatar size="medium" avatarSrc="broken" fullName="Jane Doe" />
    <br />
    <Avatar size="small" avatarSrc="broken" fullName="Jane Doe" />
  </>
)

Fallback.storyName = "Initials Fallback (on broken src)"

export const DisabledInitials = () => (
  <>
    <Avatar
      isCurrentUser={false}
      size="xxlarge"
      fullName="213146147"
      disableInitials
    />
    <br />
    <Avatar
      isCurrentUser={false}
      size="xlarge"
      fullName="213146147"
      disableInitials
    />
    <br />
    <Avatar
      isCurrentUser={false}
      size="large"
      fullName="213146147"
      disableInitials
    />
    <br />
    <Avatar
      isCurrentUser={false}
      size="medium"
      fullName="213146147"
      disableInitials
    />
    <br />
    <Avatar
      isCurrentUser={false}
      size="small"
      fullName="213146147"
      disableInitials
    />
  </>
)

export const WithoutNameOrAvatar = () => (
  <>
    <Avatar isCurrentUser={false} size="xxlarge" />
    <br />
    <Avatar isCurrentUser={false} size="xlarge" />
    <br />
    <Avatar isCurrentUser={false} size="large" />
    <br />
    <Avatar isCurrentUser={false} size="medium" />
    <br />
    <Avatar isCurrentUser={false} size="small" />
  </>
)

export const CompanyAccount = () => (
  <>
    <Avatar
      isCompany
      fullName="Hooli"
      avatarSrc={assetUrl("third-party-logos/msteam.svg")}
      size="xxlarge"
    />
    <br />
    <Avatar
      isCompany
      fullName="Hooli"
      avatarSrc={assetUrl("third-party-logos/msteam.svg")}
      size="xlarge"
    />
    <br />
    <Avatar
      isCompany
      fullName="Hooli"
      avatarSrc={assetUrl("third-party-logos/msteam.svg")}
      size="large"
    />
    <br />
    <Avatar
      isCompany
      fullName="Hooli"
      avatarSrc={assetUrl("third-party-logos/msteam.svg")}
      size="medium"
    />
    <br />
    <Avatar
      isCompany
      fullName="Hooli"
      avatarSrc={assetUrl("third-party-logos/msteam.svg")}
      size="small"
    />
  </>
)

export const CompanyFallback = () => (
  <>
    <Avatar isCompany fullName="Hooli" avatarSrc={"blank"} size="xxlarge" />
    <br />
    <Avatar isCompany fullName="Hooli" avatarSrc={"blank"} size="xlarge" />
    <br />
    <Avatar isCompany fullName="Hooli" avatarSrc={"blank"} size="large" />
    <br />
    <Avatar isCompany fullName="Hooli" avatarSrc={"blank"} size="medium" />
    <br />
    <Avatar isCompany fullName="Hooli" avatarSrc={"blank"} size="small" />
  </>
)

CompanyFallback.storyName = "Company Fallback (on broken src)"

export const CompanyAnonymous = () => (
  <>
    <Avatar isCompany size="xxlarge" />
    <br />
    <Avatar isCompany size="xlarge" />
    <br />
    <Avatar isCompany size="large" />
    <br />
    <Avatar isCompany size="medium" />
    <br />
    <Avatar isCompany size="small" />
  </>
)
