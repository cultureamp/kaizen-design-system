import * as React from "react"

import { Avatar } from "@kaizen/draft-avatar"

export default {
  title: "Avatar (React)",
}

export const DefaultStory = () => (
  <>
    <Avatar size="large" fullName="John Smith" />
    <br />
    <Avatar size="medium" fullName="John Smith" />
  </>
)
export const WithAvatarPath = () => (
  <>
    <Avatar
      size="large"
      avatarPath="https://www.fillmurray.com/200/300"
      fullName="John Smith"
    />
    <br />
    <Avatar
      size="medium"
      avatarPath="https://www.fillmurray.com/200/300"
      fullName="John Smith"
    />
  </>
)
export const WithBrokenAvatarPath = () => (
  <>
    <Avatar
      size="large"
      avatarPath="https://broke.fillmurray.com/200/300"
      fullName="Jane Doe"
    />
    <br />
    <Avatar
      size="medium"
      avatarPath="https://broke.fillmurray.com/200/300"
      fullName="Jane Doe"
    />
  </>
)

export const WithLongInitialFallback = () => (
  <>
    <Avatar size="large" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="medium" fullName="Very Long Name Which Shows Initials" />
  </>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
