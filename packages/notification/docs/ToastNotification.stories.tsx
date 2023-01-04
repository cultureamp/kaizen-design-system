import * as React from "react"
import { Story } from "@storybook/react"
import isChromatic from "chromatic"
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

const IS_CHROMATIC = isChromatic()

const withNavigation = (StoryChild: () => JSX.Element) => (
  <>
    <div style={{ margin: "-1rem", minHeight: "150px" }}>
      <TitleBlockZen title="Page title" collapseNavigationAreaWhenPossible />
      <StoryChild />
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

export const PositiveKaizenSiteDemo = args => {
  React.useEffect(() => {
    addToastNotification({ ...args })
  })
  return <></>
}

PositiveKaizenSiteDemo.args = {
  type: "positive",
  title: "Success",
  automationId: "notification1",
  message: (
    <>
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </>
  ),
  autohide: false,
}

PositiveKaizenSiteDemo.storyName = "Toast Notification"

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

const StickerSheetTemplate: Story = () => {
  React.useEffect(() => {
    addToastNotification({
      type: "positive",
      title: "Positive",
      automationId: "notification1",
      message: (
        <>
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded. <a href="/">Manage users is now available</a>
        </>
      ),
      autohide: !IS_CHROMATIC,
    })
    addToastNotification({
      type: "informative",
      title: "Informative",
      automationId: "notification1",
      message: (
        <>
          New user data is currently being processed. We’ll let you know when
          the process is completed. <a href="/">Manage users</a>
        </>
      ),
      autohide: !IS_CHROMATIC,
    })
    addToastNotification({
      type: "cautionary",
      title: "Cautionary",
      automationId: "notification1",
      message: (
        <>
          New user data, imported by mackenzie@hooli.com has uploaded with some
          minor issues. <a href="/">View issues</a>
        </>
      ),
      autohide: !IS_CHROMATIC,
    })
    addToastNotification({
      type: "negative",
      title: "Negative",
      automationId: "notification1",
      message: (
        <>
          Check your connection and try again. <a href="/">Refresh</a>.
        </>
      ),
      autohide: !IS_CHROMATIC,
    })
  })
  return <></>
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
