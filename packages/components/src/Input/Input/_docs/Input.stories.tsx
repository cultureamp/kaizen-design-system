import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { UserAddIcon, WritingIcon } from "~components/Icons"
import { Input } from "../index"

const meta = {
  title: "KAIO-staging/Inputs/Input",
  component: Input,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Input>

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
      <Input type="text" value="Text" />
      <Input type="email" value="email@email.com" />
      <Input type="password" value="password" />
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Status: Story = {
  render: () => (
    <div className="flex gap-16">
      <Input type="text" value="Default" status="default" />
      <Input type="text" value="Success" status="success" />
      <Input type="text" value="Caution" status="caution" />
      <Input type="text" value="Error" status="error" />
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Icons: Story = {
  render: () => (
    <div className="flex gap-16">
      <Input
        type="text"
        value="Start Icon"
        startIconAdornment={<UserAddIcon role="presentation" />}
      />
      <Input
        type="text"
        value="End Icon"
        endIconAdornment={<WritingIcon role="presentation" />}
      />
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Reversed: Story = {
  args: { reversed: true },
  parameters: { backgrounds: { default: "Purple 700" } },
}
