import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
import { Well } from "../index"
import { borderStyleTypes } from "../types"

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
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `white` replaces the `default` variant
      </Heading>
      <Well {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `gray` is an alternative to the `default` variant
      </Heading>
      <Well color="gray" {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `blue` replaces the `informative` variant
      </Heading>
      <Well color="blue" {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `yellow` replaces the `cautionary` variant
      </Heading>
      <Well color="yellow" {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `orange` replaces the `assertive` variant
      </Heading>
      <Well color="orange" {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `red` replaces the `negative` variant
      </Heading>
      <Well color="red" {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `green` replaces the `positive` variant
      </Heading>
      <Well color="green" {...args} />
      <Heading tag="h4" variant="heading-6" classNameOverride="mb-12">
        `purple` replaces the `prominent` variant
      </Heading>
      <Well color="purple" {...args} />
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
  ),
}
