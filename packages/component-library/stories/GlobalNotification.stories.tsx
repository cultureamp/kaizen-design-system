import * as React from "react"

import { GlobalNotification } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Components/Notification/Global Notification",
  component: GlobalNotification,
  parameters: {
    docs: {
      description: {
        component:
          'import { GlobalNotification } from "@kaizen/component-library";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A21284"
    ),
  },
  decorators: [withDesign],
}

export const PositiveKaizenSiteDemo = () => (
  <GlobalNotification type="affirmative" automationId="notification1">
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </GlobalNotification>
)

PositiveKaizenSiteDemo.storyName = "Positive (Kaizen Site Demo)"

export const Informative = () => (
  <GlobalNotification type="informative" automationId="notification1">
    New user data is currently being processed. We'll let you know when the
    process is completed. <a href="/">Manage users</a>
  </GlobalNotification>
)

export const Cautionary = () => (
  <GlobalNotification type="cautionary" automationId="notification1">
    New user data, imported by mackenzie@hooli.com has uploaded with some minor
    issues. <a href="/">View issues</a>
  </GlobalNotification>
)

export const Negative = () => (
  <GlobalNotification type="negative" automationId="notification1">
    No network connection. Check your connection and try again.{" "}
    <a href="/">Refresh</a>.
  </GlobalNotification>
)

export const MultipleNotifications = () => (
  <div
    style={{
      width: "100%",
    }}
  >
    <GlobalNotification type="affirmative" automationId="notification1">
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </GlobalNotification>
    <GlobalNotification type="informative" automationId="notification2">
      New user data is currently being processed. We'll let you know when the
      process is completed. <a href="/">Manage users</a>
    </GlobalNotification>
    <GlobalNotification type="cautionary" automationId="notification3">
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues. <a href="/">View issues</a>
    </GlobalNotification>
    <GlobalNotification type="negative" automationId="notification4">
      No network connection. Check your connection and try again.{" "}
      <a href="/">Refresh</a>.
    </GlobalNotification>
  </div>
)

MultipleNotifications.storyName = "Multiple notifications"
