import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { InputSearch } from "../index"

const meta = {
  title: "Components/Inputs/InputSearch",
  component: InputSearch,
  args: {
    id: "search",
  },
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
} satisfies Meta<typeof InputSearch>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [searchTerm, setSearchTerm] = useState<string>("")

    return (
      <InputSearch
        {...args}
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value)
        }}
      />
    )
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Filled: Story = {
  args: { value: "Search me" },
}

export const Secondary: Story = {
  args: { secondary: true },
}

export const Loading: Story = {
  args: { loading: true },
}

export const Disabled: Story = {
  args: { disabled: true },
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
