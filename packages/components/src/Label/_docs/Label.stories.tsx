import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Label } from "../index"
import { LabelTypes } from "../types"

const meta = {
  title: "KAIO-staging/Label",
  component: Label,
  args: {
    children: "I am Label",
  },
} satisfies Meta<typeof Label>

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

const InlineFormControl = (): JSX.Element => (
  <span className="inline-block w-16 h-16 bg-gray-500"></span>
)
const BlockFormControl = (): JSX.Element => (
  <span className="block w-200 h-16 bg-gray-500"></span>
)

export const InlineControls: Story = {
  args: {
    labelText: "Inline controls",
    labelType: "checkbox",
    children: <InlineFormControl />,
  },
}

export const Position: Story = {
  render: () => (
    <span className="flex flex-col gap-16">
      <Label labelText="Checkbox (default position: end)" labelType="checkbox">
        <InlineFormControl />
      </Label>
      <Label
        labelText="Checkbox (position: start)"
        labelType="checkbox"
        labelPosition="start"
      >
        <InlineFormControl />
      </Label>
    </span>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const BlockControls: Story = {
  render: () => (
    <>
      <Label labelText="I am label" labelType="text" />
      <BlockFormControl />
    </>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Types: Story = {
  render: () => (
    <ul className="flex gap-16 list-none m-0 p-0">
      {LabelTypes.map(type => (
        <li key={type}>
          <Label labelType={type}>{type}</Label>
        </li>
      ))}
    </ul>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const LabelText: Story = {
  args: {
    labelText: "Label text",
    labelType: "checkbox",
    children: <InlineFormControl />,
  },
}

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <Label variant="default">Label default</Label>
      <Label variant="prominent">Label prominent</Label>
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}
