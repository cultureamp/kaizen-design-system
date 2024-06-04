import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  args: {},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <TooltipTrigger>
      <Button
        label="button labelfdsofjbnsdpoufndslkjfgnspdfkojgnsúdfkojgn"
        component={(props): React.ReactElement => (
          <div {...props}>
            <div>I&apos;m custom</div>
            <div>{props.children}</div>
          </div>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
  },
}
