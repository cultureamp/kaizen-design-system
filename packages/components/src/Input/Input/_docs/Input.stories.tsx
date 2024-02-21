import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { UserAddIcon, WritingIcon } from "~components/Icon"
import { Input } from "../index"

const meta = {
  title: "Components/Inputs/Input",
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
    <ul className="kz-flex kz-gap-16 kz-list-none kz-p-0 kz-m-0">
      <li>
        <Input type="text" value="Text" />
      </li>
      <li>
        <Input type="email" value="email@email.com" />
      </li>
      <li>
        <Input type="password" value="password" />
      </li>
    </ul>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Status: Story = {
  render: () => (
    <ul className="kz-flex kz-gap-16 kz-list-none kz-p-0 kz-m-0">
      <li>
        <Input type="text" value="Default" status="default" />
      </li>
      <li>
        <Input type="text" value="Success" status="success" />
      </li>
      <li>
        <Input type="text" value="Caution" status="caution" />
      </li>
      <li>
        <Input type="text" value="Error" status="error" />
      </li>
    </ul>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Icons: Story = {
  render: () => (
    <ul className="kz-flex kz-gap-16 kz-list-none kz-p-0 kz-m-0">
      <li>
        <Input
          type="text"
          value="Start Icon"
          startIconAdornment={<UserAddIcon role="presentation" />}
        />
      </li>
      <li>
        <Input
          type="text"
          value="End Icon"
          endIconAdornment={<WritingIcon role="presentation" />}
        />
      </li>
    </ul>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Reversed: Story = {
  args: { reversed: true },
  decorators: [
    Story => (
      <div className="kz-bg-purple-700 kz-p-16">
        <Story />
      </div>
    ),
  ],
}
