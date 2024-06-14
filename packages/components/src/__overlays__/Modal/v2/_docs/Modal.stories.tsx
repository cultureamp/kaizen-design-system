import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { Modal } from "../"

const meta = {
  title: "Overlays/Modal/v2",
  component: Modal,
  args: {
    children: (
      <Text variant="body">
        Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick
        fatback cow tongue ground round chicken. Jowl cow short ribs, ham tongue
        turducken spare ribs pig drumstick chuck meatball. Buffalo turducken
        pancetta tail salami chicken. Bresaola venison pastrami beef.
      </Text>
    ),
  },
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Modal>

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
