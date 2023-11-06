import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Label } from "~components/Label"
import { FieldGroup } from "../index"

const meta = {
  title: "Components/FieldGroup",
  component: FieldGroup,
  args: {
    children: (
      <>
        <Label htmlFor="id--field-1">Email</Label>
        <input
          className="ms-6 border"
          placeholder="Native text input..."
          type="text"
          id="id--field-1"
        />
      </>
    ),
  },
} satisfies Meta<typeof FieldGroup>

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

export const Inline: Story = {
  render: () => (
    <>
      <FieldGroup classNameOverride="mr-6" inline>
        <Label htmlFor="id--field-1">Email</Label>
        <input
          className="ms-6 border"
          placeholder="Native text input..."
          type="text"
          id="id--field-2"
        />
      </FieldGroup>
      <FieldGroup inline>
        <Label htmlFor="id--field-1">Username</Label>
        <input
          className="ms-6 border"
          placeholder="Native text input..."
          type="text"
          id="id--field-2"
        />
      </FieldGroup>
    </>
  ),
}

export const Default: Story = {
  render: () => (
    <>
      <FieldGroup>
        <Label htmlFor="id--field-1">Email</Label>
        <input
          className="ms-6 border"
          placeholder="Native text input..."
          type="text"
          id="id--field-2"
        />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="id--field-1">Username</Label>
        <input
          className="ms-6 border"
          placeholder="Native text input..."
          type="text"
          id="id--field-2"
        />
      </FieldGroup>
    </>
  ),
}
