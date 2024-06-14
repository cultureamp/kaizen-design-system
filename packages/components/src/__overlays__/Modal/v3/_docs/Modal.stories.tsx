import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { Modal } from "~components/__overlays__/v3"

const meta = {
  title: "Overlays/Modal/v3",
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
  render: () => <Modal></Modal>,
}
