/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { LinkStyle } from "../index"

const meta = {
  title: "Components/LinkStyle",
  component: LinkStyle,
  args: {
    children: <a href="#">Anchor</a>
  }
} satisfies Meta<typeof LinkStyle>

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
  args: { isReversed: true }
}
