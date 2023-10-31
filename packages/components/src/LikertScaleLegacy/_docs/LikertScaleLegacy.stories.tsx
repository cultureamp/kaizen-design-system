import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { LikertScaleLegacy } from "../index"
import { Scale, ScaleItem } from "../types"

const scale: Scale = [
  {
    value: -1,
    label: "Not rated",
  },
  {
    value: 1,
    label: "Strong Disagree",
  },
  {
    value: 2,
    label: "Disagree",
  },
  {
    value: 3,
    label: "Neither agree or disagree",
  },
  {
    value: 4,
    label: "Agree",
  },
  {
    value: 5,
    label: "Strongly agree",
  },
]

const meta = {
  title: "Components/LikertScaleLegacy",
  component: LikertScaleLegacy,
  args: {
    scale,
    labelId: "labelId",
    selectedItem: scale[0],
    onSelect: (): void => undefined,
  },
} satisfies Meta<typeof LikertScaleLegacy>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [selectedItem, setSelectedItem] = useState<ScaleItem | null>(null)
    return (
      <LikertScaleLegacy
        {...args}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
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
