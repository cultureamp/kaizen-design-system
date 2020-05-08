import * as React from "react"

import { InlineNotification } from "@kaizen/component-library"

export default {
  title: "InlineNotification (React)",
}

export const DismissiblePositiveKaizenSiteDemo = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissiblePositiveKaizenSiteDemo.story = {
  name: "Dismissible, Positive (Kaizen Site Demo)",
}

export const DismissiblePositiveAutohide = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    autohide
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissiblePositiveAutohide.story = {
  name: "Dismissible, Positive, Autohide",
}

export const DismissiblePositiveAutohideHideCloseIcon = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    autohide
    hideCloseIcon
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissiblePositiveAutohideHideCloseIcon.story = {
  name: "Dismissible, Positive, Autohide, Hide Close Icon",
}

export const DismissibleInformative = () => (
  <InlineNotification
    type="informative"
    title="Informative"
    automationId="notification1"
  >
    New user data is currently being processed. We'll let you know when the
    process is completed. <a href="/">Manage users</a>
  </InlineNotification>
)

DismissibleInformative.story = {
  name: "Dismissible, Informative",
}

export const DismissibleCautionary = () => (
  <InlineNotification
    type="cautionary"
    title="Warning"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has uploaded with some minor
    issues. <a href="/">View issues</a>
  </InlineNotification>
)

DismissibleCautionary.story = {
  name: "Dismissible, Cautionary",
}

export const DismissibleNegative = () => (
  <InlineNotification
    type="negative"
    title="No network connection"
    automationId="notification1"
  >
    Check your connection and try again. <a href="/">Refresh</a>.
  </InlineNotification>
)

DismissibleNegative.story = {
  name: "Dismissible, Negative",
}

export const DismissibleMultiline = () => (
  <InlineNotification
    type="negative"
    title="Error"
    automationId="notification1"
  >
    There’s a problem connecting to your HRIS. Check your HRIS is working and
    check your <a href="/">integration settings</a>, or if you require more
    assistance please <a href="/">contact support</a>.
  </InlineNotification>
)

DismissibleMultiline.story = {
  name: "Dismissible, Multiline",
}

export const DismissibleSlim = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    automationId="notification1"
  >
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissibleSlim.story = {
  name: "Dismissible, Slim",
}

export const PersistentPositive = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    persistent
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

PersistentPositive.story = {
  name: "Persistent, Positive",
}

export const PersistentInformative = () => (
  <InlineNotification
    type="informative"
    title="Informative"
    persistent
    automationId="notification1"
  >
    New user data is currently being processed. We'll let you know when the
    process is completed. <a href="/">Manage users</a>
  </InlineNotification>
)

PersistentInformative.story = {
  name: "Persistent, Informative",
}

export const PersistentCautionary = () => (
  <InlineNotification
    type="cautionary"
    title="Warning"
    persistent
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has uploaded with some minor
    issues. <a href="/">View issues</a>
  </InlineNotification>
)

PersistentCautionary.story = {
  name: "Persistent, Cautionary",
}

export const PersistentNegative = () => (
  <InlineNotification
    type="negative"
    title="No network connection"
    automationId="notification1"
  >
    Check your connection and try again. <a href="/">Refresh</a>.
  </InlineNotification>
)

PersistentNegative.story = {
  name: "Persistent, Negative",
}

export const PersistentMultiline = () => (
  <InlineNotification
    type="negative"
    title="Error"
    persistent
    automationId="notification1"
  >
    There’s a problem connecting to your HRIS. Check your HRIS is working and
    check your <a href="/">integration settings</a>, or if you require more
    assistance please <a href="/">contact support</a>.
  </InlineNotification>
)

PersistentMultiline.story = {
  name: "Persistent, Multiline",
}

export const PersistentSlim = () => (
  <InlineNotification
    type="affirmative"
    title="Success!"
    persistent
    automationId="notification1"
  >
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

PersistentSlim.story = {
  name: "Persistent, Slim",
}

export const MultipleNotification = () => (
  <div
    style={{
      width: "100%",
    }}
  >
    <InlineNotification
      type="affirmative"
      title="Success!"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </InlineNotification>
    <InlineNotification
      type="informative"
      title="Informative"
      automationId="notification2"
    >
      New user data is currently being processed. We'll let you know when the
      process is completed. <a href="/">Manage users</a>
    </InlineNotification>
    <InlineNotification
      type="cautionary"
      title="Warning"
      automationId="notification3"
    >
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues. <a href="/">View issues</a>
    </InlineNotification>
    <InlineNotification
      type="negative"
      title="No network connection"
      automationId="notification4"
    >
      Check your connection and try again. <a href="/">Refresh</a>.
    </InlineNotification>
  </div>
)
