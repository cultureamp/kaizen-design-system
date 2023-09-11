import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Heading, Paragraph } from "@kaizen/typography"
import { Card } from "~components/Card"
import { Divider } from "../index"

const meta = {
  title: "KAIO-staging/Divider",
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
        <Paragraph variant="small" color="dark-reduced-opacity">
          Interpersonal
        </Paragraph>
      </div>
      <Divider variant="content" />
      <div className="p-16 flex flex-col gap-8">
        <Heading variant="heading-4" color="dark">
          Anticipates customers needs
        </Heading>
        <Paragraph variant="small" color="dark-reduced-opacity">
          Self management
        </Paragraph>
      </div>
      <Divider variant="content" />
      <div className="p-16 flex flex-col gap-8">
        <Heading variant="heading-4" color="dark">
          Initiates and develops relationships
        </Heading>
        <Paragraph variant="small" color="dark-reduced-opacity">
          Interpersonal
        </Paragraph>
      </div>
    </Card>
  ),
}
