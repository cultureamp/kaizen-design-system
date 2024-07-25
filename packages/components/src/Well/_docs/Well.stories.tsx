import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
import { Well } from "../index"
import { borderStyleTypes, variantTypes, wellColors } from "../types"

const meta = {
  title: "Components/Well",
  component: Well,
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
} satisfies Meta<typeof Well>

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

export const Colors: Story = {
  render: args => (
    <>
      {wellColors.map(color => (
        <>
          <Heading tag="h4" variant="heading-6">
            {color}
          </Heading>
          <Well color={color} {...args} />
        </>
      ))}
    </>
  ),
}

export const Variants: Story = {
  render: args => (
    <>
      {variantTypes.map(variant => (
        <>
          <Heading tag="h4" variant="heading-6">
            {variant}
          </Heading>
          <Well variant={variant} {...args} />
        </>
      ))}
    </>
  ),
}

export const BorderStyles: Story = {
  render: args => (
    <>
      {borderStyleTypes.map(border => (
        <>
          <Heading tag="h4" variant="heading-6">
            {border}
          </Heading>
          <Well borderStyle={border} {...args} />
        </>
      ))}
    </>
  ),
}

export const NoMargin: Story = {
  render: args => (
    <>
      <div className="flex gap-16">
        <div>
          <Heading tag="h4" variant="heading-6">
            Margin (default)
          </Heading>
          <Well {...args} />
          <Well {...args} />
        </div>
        <div>
          <Heading tag="h4" variant="heading-6">
            noMargin
          </Heading>
          <Well noMargin {...args} />
          <Well {...args} />
        </div>
      </div>
    </>
  ),
}

export const TestDeprecatedCompatibility: Story = {
  render: () => (
    <>
      <>
        <Well variant="prominent">
          <code>variant</code> is deprecated but should still supersede color
          default <code>white</code> to allow gradual migration
        </Well>
      </>
    </>
  ),
}
