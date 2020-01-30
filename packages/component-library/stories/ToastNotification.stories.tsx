import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { ToastNotification } from "@kaizen/component-library"

storiesOf("ToastNotification (React)", module)
  .add("Positive (Kaizen Site Demo)", () => (
    <ToastNotification
      type="affirmative"
      title="Success!"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </ToastNotification>
  ))
  .add("Positive, Autohide", () => (
    <ToastNotification
      type="affirmative"
      title="Success!"
      autohide
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </ToastNotification>
  ))
  .add("Positive, Autohide, Hide Close Icon", () => (
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
  ))
  .add("Informative", () => (
    <ToastNotification
      type="informative"
      title="Informative"
      automationId="notification1"
    >
      New user data is currently being processed. We'll let you know when the
      process is completed. <a href="/">Manage users</a>
    </ToastNotification>
  ))
  .add("Cautionary", () => (
    <ToastNotification
      type="cautionary"
      title="Warning"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues. <a href="/">View issues</a>
    </ToastNotification>
  ))
  .add("Negative", () => (
    <ToastNotification
      type="negative"
      title="No network connection"
      automationId="notification1"
    >
      Check your connection and try again. <a href="/">Refresh</a>.
    </ToastNotification>
  ))
  .add("Multiple notifications", () => (
    <div>
      <ToastNotification
        type="affirmative"
        title="Success!"
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
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
  ))
loadElmStories(
  "ToastNotification (Elm)",
  module,
  require("./ToastNotification.stories.elm"),
  [
    "Positive",
    "Informative",
    "Cautionary",
    "Negative",
    "Multiple notifications",
  ]
)
