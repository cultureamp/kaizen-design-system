import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { Popover, useFloating } from "../index"

const meta = {
  title: "Components/MultiSelect/Popover",
  component: Popover,
  argTypes: { ...classNameOverrideArgType },
  args: {
    refs: undefined,
    children: (
      <div className="p-16">
        <button type="button">Waffles</button>
        <button type="button">Pikelets</button>
        <button type="button">Pikelets</button>
      </div>
    ),
  },
  decorators: [
    Story => (
      <div className="overflow-scroll max-w-[200px] max-h-[200px] border-solid">
        <div
          id="testing-ground"
          className="relative flex justify-center items-center h-[500px] w-[500px]"
        >
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

const PopoverTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { refs } = useFloating()
    const handleClose = (): void => setIsOpen(false)

    return (
      <div>
        <button
          ref={refs.setReference}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Pancakes!
        </button>
        <button type="button">Flapjacks</button>

        {isOpen && (
          <Popover
            {...args}
            portalContainer={
              document.getElementById("testing-ground") ?? undefined
            }
            refs={refs}
            focusOnProps={{
              onClickOutside: handleClose,
              onEscapeKey: handleClose,
              shards: [refs.reference],
            }}
          />
        )}
      </div>
    )
  },
}

export const Playground: Story = {
  ...PopoverTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
