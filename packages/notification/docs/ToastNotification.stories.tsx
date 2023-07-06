import React from "react"
import { StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
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
import styles from "./ToastNotification.stories.module.scss"

const IS_CHROMATIC = isChromatic()

const withNavigation = (StoryChild: () => JSX.Element): JSX.Element => (
  <div style={{ margin: "-1rem", minHeight: "150px" }}>
    <TitleBlockZen title="Page title" collapseNavigationAreaWhenPossible />
    <StoryChild />
  </div>
)

const Triggers = ({
  notifications,
}: {
  notifications: ToastNotificationWithOptionals[]
}): JSX.Element => {
  const [local] = React.useState(notifications.map(n => ({ ...n, id: v4() })))

  return (
    <Container>
      <Content>
        <Box py={1} classNameOverride={styles.triggerContainer}>
          <Box mr={0.25}>
            <Button
              label={`Show notification${local.length > 1 ? "s" : ""}`}
              onClick={(): void => {
                local.forEach(addToastNotification)
              }}
            />
          </Box>
          <Box mr={0.25}>
            <Button
              label="Remove"
              onClick={(): void => {
                local.forEach(({ id }) => removeToastNotification(id))
              }}
            />
          </Box>
          <Button
            label="Clear"
            onClick={(): void => {
              clearToastNotifications()
            }}
          />
        </Box>
      </Content>
    </Container>
  )
}

export default {
  tags: ["autodocs"],
  title: "Components/Notifications/Toast Notification",
  component: ToastNotification,
  parameters: {
    docs: {
      description: {
        component:
          'import { addToastNotification, removeToastNotification, clearToastNotifications } from "@kaizen/notification"',
      },
    },
  },
  decorators: [withNavigation],
}

export const PositiveKaizenSiteDemo: StoryFn<
  ToastNotificationWithOptionals
> = args => {
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

export const OverflowNotifications: StoryFn<typeof Triggers> = () => {
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

export const UpdatedNotification: StoryFn = () => (
  <Container>
    <Content>
      <Box py={1} classNameOverride={styles.triggerContainer}>
        <Box mr={0.25}>
          <Button
            label="Create initial notification"
            onClick={(): void => {
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
          label="Update initial notification"
          onClick={(): void => {
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

const StickerSheetTemplate: StoryFn = () => {
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
      type: "security",
      title: "Security",
      automationId: "notification1",
      message: (
        <>
          Results hidden to protect confidentiality of individuals and small
          groups. <a href="/">Learn more</a>
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
    addToastNotification({
      type: "positive",
      title:
        "Very long Title Example Very long title Example VerylongTitleExampleVerylongtitleExample ",
      automationId: "notification1",
      message: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
          odio vitae sem gravida rutrum. Praesent vel sapien eget eros dictum
          luctus scelerisque eu nibh. Etiam ullamcorper lobortis gravida.
          Suspendisse massa tortor, ultricies et ipsum at, iaculis bibendum est.
        </>
      ),
      autohide: false,
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
