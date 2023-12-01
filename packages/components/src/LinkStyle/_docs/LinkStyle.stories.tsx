/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { HTMLAttributes } from "react"
import { Meta, StoryObj } from "@storybook/react"
import classnames from "classnames"
import { Text } from "~components/Text"
import { LinkStyle } from "../index"

const exampleAnchor = <a href="#">Anchor</a>

const ComponentWithClassName = (
  props: HTMLAttributes<HTMLSpanElement>
): JSX.Element => (
  <span {...props} className={classnames("coffee", props.className)}>
    Component with className prop
  </span>
)

const meta = {
  title: "Components/LinkStyle",
  component: LinkStyle,
  argTypes: {
    children: {
      control: { type: "select" },
      options: {
        "<a>": exampleAnchor,
        "<button>": <button type="button">Button</button>,
        "Component with className": <ComponentWithClassName />,
        "Component with classNameOverride": (
          <Text tag="span" variant="body">
            Kaizen Text component
          </Text>
        ),
      },
    },
    classNamePropName: {
      control: { type: "radio" },
      options: {
        className: "className",
        classNameOverride: "classNameOverride",
      },
    },
  },
  args: {
    children: exampleAnchor,
    classNamePropName: "className",
  },
} satisfies Meta<typeof LinkStyle>

export default meta

type Story = StoryObj<typeof meta>

const LinkStyleTemplate: Story = {
  render: args => (
    <Text tag="div" variant="body" color={args.isReversed ? "white" : "dark"}>
      Using <LinkStyle {...args} /> as child
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

export const Children: Story = {
  render: ({ children }) => {
    const classNamePropName =
      children?.props?.children === "Kaizen Text component"
        ? "classNameOverride"
        : "className"

    return (
      <Text tag="div" variant="body">
        Using{" "}
        <LinkStyle classNamePropName={classNamePropName}>{children}</LinkStyle>{" "}
        as child
      </Text>
    )
  },
  parameters: { controls: { include: "children" } },
}

export const Reversed: Story = {
  ...LinkStyleTemplate,
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const ClassNamePropName: Story = {
  ...LinkStyleTemplate,
  name: "Child with different className prop",
  args: {
    children: (
      <Text tag="span" variant="body" classNameOverride="border">
        Kaizen Text component
      </Text>
    ),
    classNamePropName: "classNameOverride",
  },
}
