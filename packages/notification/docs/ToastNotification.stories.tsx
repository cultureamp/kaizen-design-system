import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { v4 } from "uuid"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import { Container, Content } from "@kaizen/draft-page-layout"
import { TitleBlockZen } from "@kaizen/draft-title-block-zen"
import {
  addToastNotification,
  removeToastNotification,
  clearToastNotifications,
  ToastNotification,
} from "@kaizen/notification"
import { ToastNotificationWithOptionals } from "@kaizen/notification/src/types"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./ToastNotification.stories.module.scss"

const withNavigation = (Story: React.FunctionComponent) => (
  <>
    <div style={{ margin: "-1rem", minHeight: "150px" }}>
      <TitleBlockZen title="Page title" collapseNavigationAreaWhenPossible />
      <Story />
    </div>
  </>
)

const Triggers = ({
  notifications,
}: {
  notifications: ToastNotificationWithOptionals[]
}) => {
  const [local] = React.useState(notifications.map(n => ({ ...n, id: v4() })))

  return (
    <Container>
      <Content>
        <Box py={1} classNameOverride={styles.triggerContainer}>
          <Box mr={0.25}>
            <Button
              label={`Show notification${local.length > 1 ? "s" : ""}`}
              onClick={() => {
                local.forEach(addToastNotification)
              }}
            />
          </Box>
          <Box mr={0.25}>
            <Button
              label="Remove"
              onClick={() => {
                local.forEach(({ id }) => removeToastNotification(id))
              }}
            />
          </Box>
          <Button
            label="Clear"
            onClick={() => {
              clearToastNotifications()
            }}
          />
        </Box>
      </Content>
    </Container>
  )
}

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.notification}/Toast Notification`,
  component: ToastNotification,
  parameters: {
    docs: {
      description: {
        component:
          'import { addToastNotification, removeToastNotification, clearToastNotifications } from "@kaizen/notification"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A21830"
    ),
  },
  decorators: [withDesign, withNavigation],
}

export const PositiveKaizenSiteDemo = () => {
  React.useEffect(() => {
    addToastNotification({
      type: "positive",
      title: "Success",
      automationId: "notification1",
      message: (
        <>
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded. <a href="/">Manage users is now available</a>
        </>
      ),
    })
  })
  return <></>
}

PositiveKaizenSiteDemo.storyName = "Positive (Kaizen Site Demo)"

export const PositiveAutohide = () => (
  <Triggers
    notifications={[
      {
        type: "positive",
        title: "Success",
        automationId: "notification1",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has successfully
            uploaded. <a href="/">Manage users is now available</a>
          </>
        ),
      },
    ]}
  />
)

PositiveAutohide.storyName = "Positive, Autohide"

export const PositiveAutohideHideCloseIcon = () => (
  <Triggers
    notifications={[
      {
        automationId: "notification1",
        type: "positive",
        title: "Success",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has successfully
            uploaded. <a href="/">Manage users is now available</a>
          </>
        ),
        persistent: true,
      },
    ]}
  />
)

PositiveAutohideHideCloseIcon.storyName = "Positive, Autohide, Hide Close Icon"

export const Informative = () => (
  <Triggers
    notifications={[
      {
        automationId: "notification1",
        type: "informative",
        title: "Informative",
        message: (
          <>
            New user data is currently being processed. We’ll let you know when
            the process is completed. <a href="/">Manage users</a>
          </>
        ),
      },
    ]}
  />
)

export const Cautionary = () => (
  <Triggers
    notifications={[
      {
        automationId: "notification1",
        type: "cautionary",
        title: "Warning",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has uploaded with
            some minor issues. <a href="/">View issues</a>
          </>
        ),
      },
    ]}
  />
)

export const Negative = () => (
  <Triggers
    notifications={[
      {
        automationId: "notification1",
        type: "negative",
        title: "No network connection",
        autohide: false,
        message: (
          <>
            Check your connection and try again. <a href="/">Refresh</a>.
          </>
        ),
      },
    ]}
  />
)

export const MultipleNotifications = () => (
  <Triggers
    notifications={[
      {
        automationId: "notification1",
        type: "positive",
        title: "Success",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has successfully
            uploaded. <a href="/">Manage users is now available</a>
          </>
        ),
      },
      {
        automationId: "notification2",
        type: "informative",
        title: "Informative",
        message: (
          <>
            New user data is currently being processed. We’ll let you know when
            the process is completed. <a href="/">Manage users</a>
          </>
        ),
        persistent: true,
      },
      {
        automationId: "notification3",
        type: "cautionary",
        title: "Warning",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has uploaded with
            some minor issues. <a href="/">View issues</a>
          </>
        ),
      },
      {
        automationId: "notification4",
        type: "negative",
        title: "No network connection",
        message: (
          <>
            Check your connection and try again. <a href="/">Refresh</a>.
          </>
        ),
      },
    ]}
  />
)

MultipleNotifications.storyName = "Multiple notifications"

export const OverflowNotifications = () => {
  const seed = Math.random() * 1000
  return (
    <Triggers
      notifications={[...Array(15)].map((_, i) => ({
        automationId: `notification-${i}-${seed}`,
        type: Math.random() > 0.5 ? "positive" : "cautionary",
        title: "Success",
        autohide: false,
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has successfully
            uploaded. <a href="/">Manage users is now available</a>
          </>
        ),
      }))}
    />
  )
}
OverflowNotifications.storyName = "Overflow notifications"

export const UpdatedNotification = () => (
  <Container>
    <Content>
      <Box py={1} classNameOverride={styles.triggerContainer}>
        <Box mr={0.25}>
          <Button
            label={"Create initial notification"}
            onClick={() => {
              addToastNotification({
                id: "consistent-id",
                automationId: "notification1",
                type: "positive",
                title: "Initial notification title",
                message: (
                  <>
                    Notifications with consistent IDs will be updated in place.
                  </>
                ),
                persistent: true,
              })
            }}
          />
        </Box>
        <Button
          label={"Update initial notification"}
          onClick={() => {
            addToastNotification({
              id: "consistent-id",
              automationId: "notification1",
              type: "cautionary",
              title: "Updated notification title",
              message: (
                <>
                  Which means you can send them multiple times safely (as long
                  as you’re not hiding them).
                </>
              ),
              persistent: true,
            })
          }}
        />
      </Box>
    </Content>
  </Container>
)
UpdatedNotification.storyName = "Updated notification"
