import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
  addToastNotification,
  removeToastNotification,
  clearToastNotifications,
  ToastNotification,
} from "../index"
import { ToastNotificationWithOptionals } from "../types"

const meta = {
  title: "Components/ToastNotification",
  component: ToastNotification,
  args: {
    type: "positive",
    title: "Success",
    message: (
      <>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </>
    ),
    /**
     * @note: Put consistent default values here.
     * If your value differs between stories, add the arg to the story instead.
     */
  },
} satisfies Meta<typeof ToastNotification>

export default meta

type Story = StoryObj<typeof meta>

const ToastNotificationWrapper = (
  args: ToastNotificationWithOptionals
): JSX.Element => {
  React.useEffect(() => {
    addToastNotification({ ...args })
  })
  return <></>
}

export const Playground: Story = {
  render: args => {
    React.useEffect(() => {
      addToastNotification({ ...args })
    })
    return <div></div>
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

// export const Reversed: Story = {
//   args: { isReversed: true },
// }
