import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { GlobalNotification } from "@kaizen/component-library"

storiesOf("GlobalNotification", module)
  .add("Affirmative", () => (
    <GlobalNotification type="affirmative" automationId="notification1">
      New user data, imported by mackenzie@hooli.com has successfully uploaded.
      <a href="/">Manage users is now available</a>
    </GlobalNotification>
  ))
  .add("Informative", () => (
    <GlobalNotification type="informative" automationId="notification1">
      New user data is currently being processed. We'll let you know when the
      process is completed.
      <a href="/">Manage users</a>
    </GlobalNotification>
  ))
  .add("Cautionary", () => (
    <GlobalNotification type="cautionary" automationId="notification1">
      New user data, imported by mackenzie@hooli.com has uploaded with some
      minor issues.
      <a href="/">View issues</a>
    </GlobalNotification>
  ))
  .add("Negative", () => (
    <GlobalNotification type="negative" automationId="notification1">
      No network connection. Check your connection and try again.
      <a href="/">Refresh</a>.
    </GlobalNotification>
  ))
  .add("Multiple notifications", () => (
    <div
      style={{
        width: "100%",
      }}
    >
      <GlobalNotification type="affirmative" automationId="notification1">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded.
        <a href="/">Manage users is now available</a>
      </GlobalNotification>
      <GlobalNotification type="informative" automationId="notification2">
        New user data is currently being processed. We'll let you know when the
        process is completed.
        <a href="/">Manage users</a>
      </GlobalNotification>
      <GlobalNotification type="cautionary" automationId="notification3">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues.
        <a href="/">View issues</a>
      </GlobalNotification>
      <GlobalNotification type="negative" automationId="notification4">
        No network connection. Check your connection and try again.
        <a href="/">Refresh</a>.
      </GlobalNotification>
    </div>
  ))

loadElmStories(
  "GlobalNotification (Elm)",
  module,
  require("./GlobalNotification.stories.elm"),
  [
    "Affirmative",
    "Informative",
    "Cautionary",
    "Negative",
    "Multiple notifications",
  ]
)
