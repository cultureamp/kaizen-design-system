import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card } from "~components/Card"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
import { Divider } from "../index"

const meta = {
  title: "Components/Divider",
  component: Divider,
  args: {
    variant: "content",
  },
} satisfies Meta<typeof Divider>

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

export const ContentGroup: Story = {
  render: () => (
    <Card>
      <div className="p-16 flex flex-col gap-8">
        <Heading variant="heading-4" color="dark">
          Understands people&apos;s agenda and perspectives
        </Heading>
        <Text variant="small" color="dark-reduced-opacity">
          Interpersonal
        </Text>
      </div>
      <Divider variant="content" />
      <div className="p-16 flex flex-col gap-8">
        <Heading variant="heading-4" color="dark">
          Anticipates customers needs
        </Heading>
        <Text variant="small" color="dark-reduced-opacity">
          Self management
        </Text>
      </div>
      <Divider variant="content" />
      <div className="p-16 flex flex-col gap-8">
        <Heading variant="heading-4" color="dark">
          Initiates and develops relationships
        </Heading>
        <Text variant="small" color="dark-reduced-opacity">
          Interpersonal
        </Text>
      </div>
    </Card>
  ),
}
