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

export const WithCurrentUserFalse = () => (
  <>
    <Avatar isCurrentUser={false} size="large" fullName="John Smith" />
    <br />
    <Avatar isCurrentUser={false} size="medium" fullName="John Smith" />
  </>
)
export const WithAvatarPath = () => (
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
  </>
)
export const WithBrokenAvatarSrc = () => (
  <>
    <Avatar size="large" avatarSrc="broekn" fullName="Jane Doe" />
    <br />
    <Avatar size="medium" avatarSrc="broekn" fullName="Jane Doe" />
  </>
)

export const WithLongInitialFallback = () => (
  <>
    <Avatar size="large" fullName="Very Long Name Which Shows Initials" />
    <br />
    <Avatar size="medium" fullName="Very Long Name Which Shows Initials" />
  </>
)

export const InheritContainer = () => (
  <div
    style={{
      width: "100px",
    }}
  >
    <Avatar size="inherit" fullName="Jane Doe Me" />
  </div>
)

export const JapaneseTest = () => (
  <>
    <Avatar size="medium" fullName="あなた" />
    <br />
    <Avatar size="large" fullName="キム タク" />
  </>
)

export const ChineseSimplifiedTest = () => (
  <>
    <Avatar size="medium" fullName="莫愁 芷若 莫愁" />
    <br />
    <Avatar size="large" fullName="飞莫愁鸿 莫愁 莫愁" />
  </>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}
