import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Label } from "~components/Label"
import { FieldGroup } from "../index"

const meta = {
  title: "KAIO-Staging/FieldGroup",
  component: FieldGroup,
  args: {
    children: (
      <>
        <Label htmlFor="id--field-1">Email</Label>
        <input
          className="ms-6"
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
  args: { inline: true },
}
