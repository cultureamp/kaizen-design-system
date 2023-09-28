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
    <div className="flex flex-col gap-16">
      <SearchField labelText="Search (default)" reversed />
      <SearchField labelText="Search (secondary)" reversed secondary />
    </div>
  ),
  args: { reversed: true },
  parameters: { backgrounds: { default: "Purple 700" } },
}
