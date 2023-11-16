import React, { useEffect, useId } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { useToastNotificationContext } from "../context/ToastNotificationContext"
import { ToastNotification } from "../index"

const meta = {
  title: "Components/Notifications/ToastNotification",
  component: ToastNotification,
  args: {
    id: "abc-123",
    type: "positive",
    title: "Success",
    children: (
      <div>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </div>
    ),
  },
} satisfies Meta<typeof ToastNotification>

export default meta

type Story = StoryObj<typeof meta>

const ToastNotificationTemplate: Story = {
  render: args => {
    const reactId = useId()
    const { updateToastNotification } = useToastNotificationContext()

    useEffect(() => {
      updateToastNotification({
        ...args,
        id: args.id ?? reactId,
        message: args.children,
        persistent: args.hideCloseIcon,
      })
    }, [args])

    return <ToastNotification {...args} />
  },
}

export const Playground: Story = {
  ...ToastNotificationTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const CreateNotification: Story = {
  render: () => {
    const { addToastNotification } = useToastNotificationContext()

    return (
      <Button
        label="Create notification"
        onClick={() =>
          addToastNotification({
            title: "Informative",
            type: "informative",
            message: "New notification!",
          })
        }
      />
    )
  },
}

export const UpdateNotification: Story = {
  render: () => {
    const { addToastNotification, updateToastNotification } =
      useToastNotificationContext()
    return (
      <>
        <Button
          label="Create notification"
          classNameOverride="!mr-12"
          onClick={() =>
            addToastNotification({
              id: "id--update-example",
              title: "Cautionary",
              type: "cautionary",
              message: "This content will be updated",
            })
          }
        />
        <Button
          label="Update notification"
          onClick={() =>
            updateToastNotification({
              id: "id--update-example",
              title: "Success",
              type: "positive",
              message: "The content was successfully updated",
            })
          }
        />
      </>
    )
  },
}

export const RemoveNotification: Story = {
  render: () => {
    const { addToastNotification, removeToastNotification } =
      useToastNotificationContext()
    return (
      <>
        <Button
          label="Create notification"
          classNameOverride="!mr-12"
          onClick={() =>
            addToastNotification({
              id: "id--remove-example",
              title: "Remove",
              type: "negative",
              message: "This notification will be removed",
            })
          }
        />
        <Button
          label="Remove notification"
          onClick={() => removeToastNotification("id--remove-example")}
        />
      </>
    )
  },
}

export const ClearNotifications: Story = {
  render: () => {
    const { addToastNotification, clearToastNotifications } =
      useToastNotificationContext()
    return (
      <>
        <Button
          label="Create notifications"
          classNameOverride="!mr-12"
          onClick={() => {
            addToastNotification({
              id: "id--clear-example-1",
              title: "First",
              type: "positive",
              message: "This notification will be removed",
            })
            addToastNotification({
              id: "id--clear-example-2",
              title: "Second",
              type: "cautionary",
              message: "This notification will also be removed",
            })
            addToastNotification({
              id: "id--clear-example-3",
              title: "Third",
              type: "negative",
              message: "This notification will also also be removed",
            })
          }}
        />
        <Button
          label="Clear notifications"
          onClick={() => clearToastNotifications()}
        />
      </>
    )
  },
}
