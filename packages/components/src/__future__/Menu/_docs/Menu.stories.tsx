/* eslint-disable no-console */
import { Meta, StoryObj } from "@storybook/react"
import { Menu } from "../index"

const meta = {
  title: "Components/Menu/Future",
  component: Menu,
  args: {
    button: "Open menu",
    items: [
      {
        id: "one",
        label: "One",
        onClick: () => console.log("one"),
      },
      {
        id: "two",
        label: "Two",
        onClick: () => console.log("two"),
      },
      {
        id: "three",
        label: "Three",
        href: "https://duckduckgo.com",
      },
    ],
  },
} satisfies Meta<typeof Menu>

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

export const Reversed: Story = {
  parameters: { backgrounds: { default: "Purple 700" } },
}
