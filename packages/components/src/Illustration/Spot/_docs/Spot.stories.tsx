import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { CompanyDetails } from "../index"

const meta = {
  title: "Components/Illustrations/Spot",
  component: CompanyDetails,
} satisfies Meta<typeof CompanyDetails>

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

export const EnabledAspectRatio: Story = {
  render: () => (
    <>
      <div className="kz-flex kz-items-center kz-gap-16">
        <CompanyDetails enableAspectRatio={true} />
        <Text variant="body">
          With <code>enableAspectRatio</code>... lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit id obcaecati quasi rerum natus
          nostrum, nobis saepe unde eveniet quidem! Pariatur impedit, veritatis
          at ea iure id enim ipsam voluptatum!
        </Text>
      </div>
      <div className="kz-flex kz-items-center kz-gap-16">
        <CompanyDetails />
        <Text variant="body">
          Without <code>enableAspectRatio</code>... lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit id obcaecati quasi rerum natus
          nostrum, nobis saepe unde eveniet quidem! Pariatur impedit, veritatis
          at ea iure id enim ipsam voluptatum!
        </Text>
      </div>
    </>
  ),
}
