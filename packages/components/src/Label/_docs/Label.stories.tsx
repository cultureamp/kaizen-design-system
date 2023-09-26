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
  render: () => (
    <Label labelText="Checkbox" labelType="checkbox">
      <InlineFormControl />
    </Label>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
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

/**
 * Adds text to your form control. `labelText` styling greatly depends on how you compose and what `labelType` you apply, please see Composing below for examples.
 */

export const LabelText: Story = {
  render: () => (
    <Label labelType="checkbox" labelText="Label text">
      <InlineFormControl />
    </Label>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Variant: Story = {
  render: () => (
    <ul className="flex gap-16 list-none m-0 p-0">
      <li>
        <Label variant="default">Label default</Label>
      </li>
      <li>
        <Label variant="prominent">Label prominent</Label>
      </li>
    </ul>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}
