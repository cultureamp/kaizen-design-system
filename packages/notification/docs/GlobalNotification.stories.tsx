import * as React from "react"

import { GlobalNotification } from "@kaizen/notification"
import { Heading, Box } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { Divider } from "@kaizen/draft-divider"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.notification}/Global Notification`,
  component: GlobalNotification,
  parameters: {
    docs: {
      description: {
        component: 'import { GlobalNotification } from "@kaizen/notification";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A21284"
    ),
  },
  decorators: [withDesign],
}

const ExampleHeading = ({ children }) => (
  <Box mt={1} mb={0.25}>
    <Heading variant="heading-4">{children}</Heading>
  </Box>
)

export const GlobalNotificationVariants = () => (
  <div
    style={{
      width: "100%",
    }}
  >
    <div>
      <Heading variant="heading-3">Persistent</Heading>

      <ExampleHeading>Affirmative</ExampleHeading>

      <GlobalNotification
        type="affirmative"
        automationId="notification1"
        persistent={true}
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </GlobalNotification>

      <ExampleHeading>Informative</ExampleHeading>
      <GlobalNotification
        type="informative"
        automationId="notification2"
        persistent={true}
      >
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </GlobalNotification>

      <ExampleHeading>Cautionary</ExampleHeading>
      <GlobalNotification
        type="cautionary"
        automationId="notification3"
        persistent={true}
      >
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </GlobalNotification>

      <ExampleHeading>Negative</ExampleHeading>
      <GlobalNotification
        type="negative"
        automationId="notification4"
        persistent={true}
      >
        No network connection. Check your connection and try again.{" "}
        <a href="/">Refresh</a>.
      </GlobalNotification>
    </div>

    <Box my={3}>
      <Divider variant="canvas" />
    </Box>

    <div>
      <Heading variant="heading-3">Dismissible</Heading>

      <ExampleHeading>Affirmative</ExampleHeading>
      <GlobalNotification type="affirmative" automationId="notification1">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </GlobalNotification>

      <ExampleHeading>Informative</ExampleHeading>
      <GlobalNotification type="informative" automationId="notification2">
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </GlobalNotification>

      <ExampleHeading>Cautionary</ExampleHeading>
      <GlobalNotification type="cautionary" automationId="notification3">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </GlobalNotification>

      <ExampleHeading>Negative</ExampleHeading>
      <GlobalNotification type="negative" automationId="notification4">
        No network connection. Check your connection and try again.{" "}
        <a href="/">Refresh</a>.
      </GlobalNotification>
    </div>
  </div>
)

GlobalNotificationVariants.storyName = "Global notification variants"
