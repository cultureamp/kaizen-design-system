import * as React from "react"

import { Avatar } from "@kaizen/draft-avatar"

export default {
  title: "Avatar (React)",
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
    <Avatar size="large" avatarSrc="broekn" fullName="Jane Doe" />
    <br />
    <Avatar size="medium" avatarSrc="broekn" fullName="Jane Doe" />
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

export const InheritContainerSize = () => (
  <>
    <div
      style={{
        width: "100px",
      }}
    >
      <Avatar inheritSize={true} size="large" fullName="Jane Doe Me" />
    </div>
    <div
      style={{
        width: "100px",
      }}
    >
      <Avatar inheritSize={true} size="medium" fullName="Jane Doe Me" />
    </div>
    <div
      style={{
        width: "100px",
      }}
    >
      <Avatar inheritSize={true} size="small" fullName="Jane Doe Me" />
    </div>
  </>
)

DefaultUser.story = {
  name: "Default User (Shows when image fails to load)",
}
