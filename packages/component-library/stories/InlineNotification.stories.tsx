import * as React from "react"

import { InlineNotification } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

const multilineText = (
  <>
    There’s a problem connecting to your HRIS. Check your HRIS is working and
    check your <a href="/">integration settings</a>, or if you require more
    assistance please <a href="/">contact support</a>... or just don't do
    anything and observe that this notification contains an absurd amount of
    text that is purposely verbose in order to demonstrate that verbosity is, in
    most cases, just in general really, i guess it's debatable, unnecessary and
    to demonstrate that verbosity makes this notification's body text spit into
    multiple lines because there is, surely, unequivocally, no way that all of
    this can fit into one line of text on an average screen...
  </>
)
const withContentBelow = (Story: React.FunctionComponent) => (
  <>
    <Story />
    <p>Content below the notification</p>
  </>
)

export default {
  title: "InlineNotification (React)",
  component: InlineNotification,
  parameters: {
    docs: {
      description: {
        component:
          'import { InlineNotification } from "@kaizen/component-library";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13877%3A66008"
    ),
  },
  decorators: [withDesign, withContentBelow],
}

export const DismissiblePositiveKaizenSiteDemo = () => (
  <InlineNotification
    type="affirmative"
    title="Success"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissiblePositiveKaizenSiteDemo.storyName =
  "Dismissible, Positive (Kaizen Site Demo)"

export const DismissiblePositiveAutohide = () => (
  <InlineNotification
    type="affirmative"
    title="Success"
    autohide
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissiblePositiveAutohide.storyName = "Dismissible, Positive, Autohide"

export const DismissiblePositiveAutohideHideCloseIcon = () => (
  <InlineNotification
    type="affirmative"
    title="Success"
    autohide
    hideCloseIcon
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissiblePositiveAutohideHideCloseIcon.storyName =
  "Dismissible, Positive, Autohide, Hide Close Icon"

export const DismissibleInformative = () => (
  <InlineNotification
    type="informative"
    title="Informative"
    automationId="notification1"
  >
    New user data is currently being processed. We'll let you know when the
    process is completed. <a href="/">Manage users</a>
  </InlineNotification>
)

DismissibleInformative.storyName = "Dismissible, Informative"

export const DismissibleCautionary = () => (
  <InlineNotification
    type="cautionary"
    title="Warning"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has uploaded with some minor
    issues. <a href="/">View issues</a>
  </InlineNotification>
)

DismissibleCautionary.storyName = "Dismissible, Cautionary"

export const DismissibleNegative = () => (
  <InlineNotification
    type="negative"
    title="No network connection"
    automationId="notification1"
  >
    Check your connection and try again. <a href="/">Refresh</a>.
  </InlineNotification>
)

DismissibleNegative.storyName = "Dismissible, Negative"

export const DismissibleMultiline = () => (
  <InlineNotification
    type="negative"
    title="Negative"
    automationId="notification1"
  >
    {multilineText}
  </InlineNotification>
)

DismissibleMultiline.storyName = "Dismissible, Multiline"

export const DismissibleSlim = () => (
  <InlineNotification
    type="affirmative"
    title="Success"
    automationId="notification1"
  >
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

DismissibleSlim.storyName = "Dismissible, Slim"

export const PersistentPositive = () => (
  <InlineNotification
    type="affirmative"
    title="Success"
    persistent
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

PersistentPositive.storyName = "Persistent, Positive"

export const PersistentInformative = () => (
  <InlineNotification
    type="informative"
    title="Informative"
    persistent
    automationId="notification1"
  >
    New user data is currently being processed. We'll let you know when the
    process is completed. <a href="/">Manage users</a>
  </InlineNotification>
)

PersistentInformative.storyName = "Persistent, Informative"

export const PersistentCautionary = () => (
  <InlineNotification
    type="cautionary"
    title="Warning"
    persistent
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has uploaded with some minor
    issues. <a href="/">View issues</a>
  </InlineNotification>
)

PersistentCautionary.storyName = "Persistent, Cautionary"

export const PersistentNegative = () => (
  <InlineNotification
    type="negative"
    title="No network connection"
    automationId="notification1"
  >
    Check your connection and try again. <a href="/">Refresh</a>.
  </InlineNotification>
)

PersistentNegative.storyName = "Persistent, Negative"

export const PersistentMultiline = () => (
  <InlineNotification
    type="negative"
    title="Negative"
    persistent
    automationId="notification1"
  >
    {multilineText}
  </InlineNotification>
)

PersistentMultiline.storyName = "Persistent, Multiline"

export const PersistentSlim = () => (
  <InlineNotification
    type="affirmative"
    title="Success"
    persistent
    automationId="notification1"
  >
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)

PersistentSlim.storyName = "Persistent, Slim"

export const MultipleNotification = () => (
  <div
    style={{
      width: "100%",
    }}
  >
    <InlineNotification
      type="affirmative"
      title="Success"
      automationId="notification1"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
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
)

export const NoChildren = () => (
  <InlineNotification title="No children" type="affirmative" persistent />
)
