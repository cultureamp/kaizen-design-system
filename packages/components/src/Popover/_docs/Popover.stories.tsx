import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Popover as PopoverComponent, usePopover } from "../index"

const meta = {
  title: "Components/Popover",
  component: PopoverComponent,
  args: {
    children: undefined,
    referenceElement: undefined,
  },
  argTypes: {
    variant: { control: false },
    customIcon: { control: false },
  },
} satisfies Meta<typeof PopoverComponent>

export default meta

type Story = StoryObj<typeof meta>

const PopoverTemplate: Story = {
  render: args => {
    const [referenceElementRef, Popover] = usePopover()

    return (
      <div className="text-center relative">
        <button
          type="button"
          className="inline-block mt-112"
          ref={referenceElementRef}
        >
          Pop
        </button>
        <Popover {...args}>
          Popover body that explains something useful.{" "}
          <a href="/">Optional link</a>
        </Popover>
      </div>
    )
  },
}

export const Playground: Story = {
  ...PopoverTemplate,
  decorators: [
    Story => (
      <div className="h-[300px]">
        <Story />
      </div>
    ),
  ],
}
