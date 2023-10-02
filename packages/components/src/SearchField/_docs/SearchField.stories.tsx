import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { SearchField } from "../index"

const meta = {
  title: "KAIO-staging/SearchField",
  component: SearchField,
  args: {
    labelText: "Search field",
  },
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [value, setValue] = useState("Some value")

    return (
      <SearchField
        value={value}
        onChange={(e): void => setValue(e.target.value)}
        onClear={(): void => setValue("")}
        {...args}
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

export const Secondary: Story = {
  args: {
    secondary: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Reversed: Story = {
  render: () => (
    <>
      <SearchField labelText="Search (default)" reversed />
      <SearchField labelText="Search (secondary)" reversed secondary />
    </>
  ),
  decorators: [
    Story => (
      <div className="flex gap-16 bg-purple-700 p-16">
        <Story />
      </div>
    ),
  ],
  parameters: { docs: { source: { type: "dynamic" } } },
}
