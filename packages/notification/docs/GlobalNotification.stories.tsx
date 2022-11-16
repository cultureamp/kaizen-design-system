import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Box } from "@kaizen/component-library"
import { Divider } from "@kaizen/draft-divider"
import { GlobalNotification } from "@kaizen/notification"
import { Heading } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

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
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A39077"
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

      <ExampleHeading>Positive</ExampleHeading>

      <GlobalNotification
        type="positive"
        automationId="notification1"
        persistent={true}
      >
        Emails will be sent notifying coaches and inviting reviewers to give
        their feedback. <a href="/">View all</a>
      </GlobalNotification>

      <ExampleHeading>Informative</ExampleHeading>
      <GlobalNotification
        type="informative"
        automationId="notification2"
        persistent={true}
      >
        [Survey name]'s status has been changed to 'Archived'.{" "}
        <a href="/">View all</a>
      </GlobalNotification>

      <ExampleHeading>Cautionary</ExampleHeading>
      <GlobalNotification
        type="cautionary"
        automationId="notification3"
        persistent={true}
      >
        The syncing process can take some time to complete. Keep this window
        open until complete. <a href="/">View all</a>
      </GlobalNotification>

      <ExampleHeading>Negative</ExampleHeading>
      <GlobalNotification
        type="negative"
        automationId="notification4"
        persistent={true}
      >
        Something went wrong while validating and analyzing user data.{" "}
        <a href="/">View all</a>.
      </GlobalNotification>
    </div>

    <Box my={3}>
      <Divider variant="canvas" />
    </Box>

    <div>
      <Heading variant="heading-3">Dismissible</Heading>

      <ExampleHeading>Positive</ExampleHeading>
      <GlobalNotification type="positive" automationId="notification1">
        Emails will be sent notifying coaches and inviting reviewers to give
        their feedback. <a href="/">View all</a>
      </GlobalNotification>

      <ExampleHeading>Informative</ExampleHeading>
      <GlobalNotification type="informative" automationId="notification2">
        [Survey name]'s status has been changed to 'Archived'.{" "}
        <a href="/">View all</a>
      </GlobalNotification>

      <ExampleHeading>Cautionary</ExampleHeading>
      <GlobalNotification type="cautionary" automationId="notification3">
        The syncing process can take some time to complete. Keep this window
        open until complete. <a href="/">View all</a>
      </GlobalNotification>

      <ExampleHeading>Negative</ExampleHeading>
      <GlobalNotification type="negative" automationId="notification4">
        Something went wrong while validating and analyzing user data.{" "}
        <a href="/">View all</a>.
      </GlobalNotification>
    </div>
  </div>
)
GlobalNotificationVariants.storyName = "Global notification variants"
GlobalNotificationVariants.parameters = { chromatic: { disable: false } }
