import * as React from "react"

import { withDesign } from "storybook-addon-designs"
import { Avatar } from "@kaizen/draft-avatar"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Avatar (React)",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A14306"
    ),
  },
  decorators: [withDesign],
}

export const InitialsPersonal = () => (
  <>
    <Avatar size="large" fullName="John Smith" />
    <br />
    <Avatar size="medium" fullName="John Smith" />
    <br />
    <Avatar size="small" fullName="John Smith" />
  </>
)

export const InitialsOthers = () => (
  <>
    <Avatar isCurrentUser={false} size="large" fullName="Jane Doe" />
    <br />
    <Avatar isCurrentUser={false} size="medium" fullName="Jane Doe" />
    <br />
    <Avatar isCurrentUser={false} size="small" fullName="Jane Doe" />
  </>
)
export const PhotoPersonal = () => (
  <>
    <Avatar
      size="large"
      avatarSrc="https://www.fillmurray.com/200/300"
      fullName="John Smith"
    />
    <br />
    <Avatar
      size="medium"
      avatarSrc="https://www.fillmurray.com/200/300"
      fullName="John Smith"
    />
    <br />
    <Avatar
      size="small"
      avatarSrc="https://www.fillmurray.com/200/300"
      fullName="John Smith"
    />
  </>
)
export const DefaultUser = () => (
  <>
    <Avatar size="large" avatarSrc="broken" fullName="Jane Doe" />
    <br />
    <Avatar size="medium" avatarSrc="broken" fullName="Jane Doe" />
    <br />
    <Avatar size="small" avatarSrc="broken" fullName="Jane Doe" />
  </>
)

export const WithLongInitials = () => (
  <>
    <Avatar size="large" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="medium" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="small" fullName="Very Long Name Which Shows Initials" />
  </>
)

DefaultUser.storyName = "Default User (Shows when image fails to load)"
