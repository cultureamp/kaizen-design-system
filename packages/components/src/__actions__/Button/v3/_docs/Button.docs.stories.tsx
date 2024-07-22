import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icon"
import { Button } from "../index"

const meta = {
  title: "Actions/Button/v3/Doc Assets",
  component: Button,
  args: {
    children: "Label",
    onPress: action("Button onPress event"),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const ButtonClassModifierWithRenderProps: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button
      {...otherArgs}
      className={({ isPressed }) => (isPressed ? "!bg-gray-300" : "")}
    >
      {children}
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
    <Button
      {...otherArgs}
      className={({ isPressed }) => (isPressed ? "!bg-gray-300" : "")}
    >
      {children}
    </Button>
      `,
      },
    },
  },
}

export const ButtonContentWithRenderProps: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>
      {({ isPressed }) => (
        <>
          {children}
          {isPressed ? (
            <ChevronDownIcon role="presentation" />
          ) : (
            <ChevronUpIcon role="presentation" />
          )}
        </>
      )}
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        code: `
    <Button {...otherArgs}>
      {({isPressed}) => (
        <>
          {children}
          {isPressed ? <ChevronDownIcon role="presentation" /> : <ChevronUpIcon role="presentation" />}
        </>
      )}
    </Button>
      `,
      },
    },
  },
}
