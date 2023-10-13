import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { WritingIcon } from "~components/Icon"
import { TextField } from "../index"

const meta = {
  title: "Components/Text Input controls/Text Field",
  component: TextField,
  args: {
    labelText: "Label",
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Types: Story = {
  render: () => (
    <div className="flex gap-16">
      <TextField labelText="Label" type="text" value="Text" />
      <TextField labelText="Label" type="email" value="email@email.com" />
      <TextField labelText="Label" type="password" value="password" />
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Icon: Story = {
  args: { icon: <WritingIcon role="presentation" /> },
}

export const Description: Story = {
  args: { description: "A short description" },
}

export const Validation: Story = {
  render: () => (
    <div className="flex gap-16">
      <TextField
        labelText="Label"
        type="text"
        value="Success"
        status="success"
        validationMessage="A successful entry"
      />
      <TextField
        labelText="Label"
        type="text"
        value="Caution"
        status="caution"
        validationMessage="Just a little bit incorrect"
      />
      <TextField
        labelText="Label"
        type="text"
        value="Error"
        status="error"
        validationMessage="Absolutely wrong"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Inline: Story = {
  args: { inline: true },
}

export const Reversed: Story = {
  args: { reversed: true },
  decorators: [
    Story => (
      <div className="bg-purple-700 p-16">
        <Story />
      </div>
    ),
  ],
}
