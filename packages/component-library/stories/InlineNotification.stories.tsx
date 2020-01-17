import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { InlineNotification } from "@cultureamp/kaizen-component-library"

storiesOf("InlineNotification (React)", module)
  .add("Dismissible, Positive (Kaizen Site Demo)", () => (
    <InlineNotification
      type="affirmative"
      title="Success!"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </InlineNotification>
  ))
  .add("Dismissible, Positive, Autohide", () => (
    <InlineNotification
      type="affirmative"
      title="Success!"
      autohide
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </InlineNotification>
  ))
  .add("Dismissible, Positive, Autohide, Hide Close Icon", () => (
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
  ))
  .add("Dismissible, Informative", () => (
    <InlineNotification
      type="informative"
      title="Informative"
      automationId="notification1"
    >
      New user data is currently being processed. We'll let you know when the
      process is completed. <a href="/">Manage users</a>
    </InlineNotification>
  ))
  .add("Dismissible, Cautionary", () => (
    <InlineNotification
      type="cautionary"
      title="Warning"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues. <a href="/">View issues</a>
    </InlineNotification>
  ))
  .add("Dismissible, Negative", () => (
    <InlineNotification
      type="negative"
      title="No network connection"
      automationId="notification1"
    >
      Check your connection and try again. <a href="/">Refresh</a>.
    </InlineNotification>
  ))
  .add("Dismissible, Multiline", () => (
    <InlineNotification
      type="negative"
      title="Error"
      automationId="notification1"
    >
      There’s a problem connecting to your HRIS. Check your HRIS is working and
      check your <a href="/">integration settings</a>, or if you require more
      assistance please <a href="/">contact support</a>.
    </InlineNotification>
  ))
  .add("Dismissible, Slim", () => (
    <InlineNotification
      type="affirmative"
      title="Success!"
      automationId="notification1"
    >
      <a href="/">Manage users is now available</a>
    </InlineNotification>
  ))

  .add("Persistent, Positive", () => (
    <InlineNotification
      type="affirmative"
      title="Success!"
      persistent
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </InlineNotification>
  ))
  .add("Persistent, Informative", () => (
    <InlineNotification
      type="informative"
      title="Informative"
      persistent
      automationId="notification1"
    >
      New user data is currently being processed. We'll let you know when the
      process is completed. <a href="/">Manage users</a>
    </InlineNotification>
  ))
  .add("Persistent, Cautionary", () => (
    <InlineNotification
      type="cautionary"
      title="Warning"
      persistent
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues. <a href="/">View issues</a>
    </InlineNotification>
  ))
  .add("Persistent, Negative", () => (
    <InlineNotification
      type="negative"
      title="No network connection"
      automationId="notification1"
    >
      Check your connection and try again. <a href="/">Refresh</a>.
    </InlineNotification>
  ))

  .add("Persistent, Multiline", () => (
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
  ))

  .add("Persistent, Slim", () => (
    <InlineNotification
      type="affirmative"
      title="Success!"
      persistent
      automationId="notification1"
    >
      <a href="/">Manage users is now available</a>
    </InlineNotification>
  ))

  .add("Multiple Notification", () => (
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
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
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
  ))
loadElmStories(
  "InlineNotification (Elm)",
  module,
  require("./InlineNotification.stories.elm"),
  [
    "Dismissible, Positive",
    "Dismissible, Informative",
    "Dismissible, Cautionary",
    "Dismissible, Negative",
    "Dismissible, Multiline",
    "Dismissible, Slim",
    "Persistent, Positive",
    "Persistent, Informative",
    "Persistent, Cautionary",
    "Persistent, Negative",
    "Persistent, Multiline",
    "Persistent, Slim",
    "Multiple Notification",
  ]
)
