import * as React from "react"
import { Link, ZenNavigationBar } from "@kaizen/draft-zen-navigation-bar"
import { TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { ToastNotification } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./ToastNotification.stories.scss"

const withNavigation = (Story: React.FunctionComponent) => (
  <>
    <div style={{ margin: "-1rem", minHeight: "150px" }}>
      <div className={styles.navigationBarContainer}>
        <ZenNavigationBar>
          {{
            primary: [
              <Link text="Home" href="/" active />,
              <Link text="Surveys" href="/" />,
              <Link
                text="Performance"
                href="/"
                badge={{ kind: "new", text: "New" }}
              />,
            ],
            final: [
              <Link text="Support" href="http://academy.cultureamp.com/" />,
              <Link
                tooltip="Opens in new tab"
                text="Academy"
                href="http://academy.cultureamp.com/"
              />,
            ],
          }}
        </ZenNavigationBar>
      </div>
      <TitleBlockZen title="Page title" collapseNavigationAreaWhenPossible />
      <Story />
    </div>
  </>
)

export default {
  title: "ToastNotification (React)",
  component: ToastNotification,
  parameters: {
    info: {
      text: `
        import { ToastNotification } from "@kaizen/component-library";
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A21830"
    ),
  },
  decorators: [withDesign, withNavigation],
}

export const PositiveKaizenSiteDemo = () => (
  <ToastNotification
    type="affirmative"
    title="Success"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </ToastNotification>
)

PositiveKaizenSiteDemo.storyName = "Positive (Kaizen Site Demo)"

export const PositiveAutohide = () => (
  <ToastNotification
    type="affirmative"
    title="Success"
    autohide
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </ToastNotification>
)

PositiveAutohide.storyName = "Positive, Autohide"

export const PositiveAutohideHideCloseIcon = () => (
  <ToastNotification
    automationId="notification1"
    type="affirmative"
    title="Success"
    autohide
    hideCloseIcon
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </ToastNotification>
)

PositiveAutohideHideCloseIcon.storyName = "Positive, Autohide, Hide Close Icon"

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
      title="Success"
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

MultipleNotifications.storyName = "Multiple notifications"
