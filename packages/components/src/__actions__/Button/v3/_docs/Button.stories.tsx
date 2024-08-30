import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { validate } from "uuid"
import { AddIcon, TrashIcon, ChevronUpIcon } from "~components/Icon"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Button } from "../index"

const meta = {
  title: "Actions/Button/Button (v3)",
  component: Button,
  args: {
    label: "Label",
    onPress: action("Button onPress event"),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => <Button {...args}></Button>,
}

export const ButtonWithIcon: Story = {
  args: {
    label: "label",
    icon: <AddIcon role="presentation" />,
  },
}

export const ButtonWithIconPosition: Story = {
  args: {
    label: "label",
    icon: <AddIcon role="presentation" />,
    iconPosition: "end",
  },
}

// TODO: some kind of way to do a non children Icon Button ~ maybe we actually need to do a separate component for this
export const IconButton: Story = {
  args: {
    children: (
      <>
        <TrashIcon role="img" aria-label="Remove" />
        <VisuallyHidden> Highlights: May 8, 2024</VisuallyHidden>
      </>
    ),
  },
}

export const OnReversed: Story = {
  args: {
    label: "label",
    icon: <AddIcon role="presentation" />,
  },
  parameters: {
    reverseColors: true,
    docs: {
      source: {
        code: `
          <ReversedColors isReversed={true}>
            <Button {...otherArgs}>
              <>
                Label
                <ChevronUpIcon role="presentation" />
              </>
            </Button>
          </ReversedColors>
      `,
      },
    },
  },
}

export const PreventDefault: Story = {
  render: args => (
    <form
      onSubmit={e => {
        e.preventDefault()
        const isValid = false

        if (isValid) {
          e.currentTarget.submit()
        }
      }}
    >
      <label htmlFor="test-form">Test input</label>
      <input className="  " type="text" name="test" id="test-form" />
      <Button type="submit" label="Submit"></Button>
    </form>
  ),
}

export const DisabledButton: Story = {
  render: args => (
    <form
      onSubmit={e => {
        e.preventDefault()
        const isValid = false

        if (isValid) {
          e.currentTarget.submit()
        }
      }}
    >
      <label htmlFor="test-form">Test input</label>
      <input className="  " type="text" name="test" id="test-form" />
      <Button
        isDisabled
        onPress={() => console.log("I should be able to be triggered")}
        label="Submit"
      ></Button>
    </form>
  ),
}
