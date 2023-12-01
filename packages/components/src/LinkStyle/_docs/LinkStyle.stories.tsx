/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { LinkStyle } from "../index"

const meta = {
  title: "Components/LinkStyle",
  component: LinkStyle,
  args: {
    children: <a href="#">Anchor</a>,
  },
} satisfies Meta<typeof LinkStyle>

export default meta

type Story = StoryObj<typeof meta>

const LinkStyleTemplate: Story = {
  render: args => (
    <Text tag="div" variant="body" color={args.isReversed ? "white" : "dark"}>
      Using <LinkStyle {...args} /> element
    </Text>
  ),
}

export const Playground: Story = {
  ...LinkStyleTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Reversed: Story = {
  ...LinkStyleTemplate,
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const ClassNamePropName: Story = {
  ...LinkStyleTemplate,
  args: {
    children: (
      <Text tag="span" variant="body" classNameOverride="border">
        Coffee
      </Text>
    ),
    classNamePropName: "classNameOverride",
  },
}
