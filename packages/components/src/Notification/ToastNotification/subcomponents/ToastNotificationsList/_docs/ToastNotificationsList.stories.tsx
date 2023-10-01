import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { ToastNotification } from "../../../types"

import { ToastNotificationsList } from "../"

const IS_CHROMATIC = isChromatic()

const NOTIFICATIONS: ToastNotification[] = [
  {
    id: "notification-1",
    type: "positive",
    title: "Success",
    message: (
      <div>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </div>
    ),
  },
  {
    id: "notification-2",
    type: "informative",
    title: "Info",
    message: (
      <div>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </div>
    ),
  },
  {
    id: "notification-3",
    type: "cautionary",
    title: "Caution",
    message: (
      <div>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </div>
    ),
  },
  {
    id: "notification-4",
    type: "negative",
    title: "Deleted",
    message: (
      <div>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </div>
    ),
  },
  {
    id: "notification-4",
    type: "security",
    title: "Warning",
    message: (
      <div>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </div>
    ),
  },
]

const meta = {
  title: "Components/Notifications/Toast Notification/Toast Notifications List",
  component: ToastNotificationsList,
  args: {
    notifications: NOTIFICATIONS,
    onHide: (): void => undefined,
  },
  parameters: {
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000,
    },
  },
} satisfies Meta<typeof ToastNotificationsList>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
