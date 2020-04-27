import * as React from "react"

import { ToastNotification } from "@kaizen/component-library"

export default {
  title: "ToastNotification (React)",
}

export const PositiveKaizenSiteDemo = () => (
  <ToastNotification
    type="affirmative"
    title="Success!"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </ToastNotification>
)

PositiveKaizenSiteDemo.story = {
  name: "Positive (Kaizen Site Demo)",
}

export const PositiveAutohide = () => (
  <ToastNotification
    type="affirmative"
    title="Success!"
    autohide
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </ToastNotification>
)

PositiveAutohide.story = {
  name: "Positive, Autohide",
}

export const PositiveAutohideHideCloseIcon = () => (
  <ToastNotification
    automationId="notification1"
    type="affirmative"
    title="Success!"
    autohide
    hideCloseIcon
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </ToastNotification>
)

PositiveAutohideHideCloseIcon.story = {
  name: "Positive, Autohide, Hide Close Icon",
}

export const Informative = () => (
  <ToastNotification
    type="informative"
    title="Informative"
    automationId="notification1"
  >
    New user data is currently being processed. We'll let you know when the
    process is completed. <a href="/">Manage users</a>
  </ToastNotification>
)

export const Cautionary = () => (
  <ToastNotification
    type="cautionary"
    title="Warning"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has uploaded with some minor
    issues. <a href="/">View issues</a>
  </ToastNotification>
)

export const Negative = () => (
  <ToastNotification
    type="negative"
    title="No network connection"
    automationId="notification1"
  >
    Check your connection and try again. <a href="/">Refresh</a>.
  </ToastNotification>
)

export const MultipleNotifications = () => (
  <div>
    <ToastNotification
      type="affirmative"
      title="Success!"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </ToastNotification>
    <ToastNotification
      type="informative"
      title="Informative"
      automationId="notification2"
      autohide
      hideCloseIcon
    >
      New user data is currently being processed. We'll let you know when the
      process is completed. <a href="/">Manage users</a>
    </ToastNotification>
    <ToastNotification
      type="cautionary"
      title="Warning"
      automationId="notification3"
      autohide
    >
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues. <a href="/">View issues</a>
    </ToastNotification>
    <ToastNotification
      type="negative"
      title="No network connection"
      automationId="notification4"
    >
      Check your connection and try again. <a href="/">Refresh</a>.
    </ToastNotification>
  </div>
)

MultipleNotifications.story = {
  name: "Multiple notifications",
}
