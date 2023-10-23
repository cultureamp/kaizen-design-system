import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, MeatballsIcon } from "~components/Icon"
import { Popover as PopoverComponent, PopoverProps, usePopover } from "../index"

const meta = {
  title: "Components/Popover",
  component: PopoverComponent,
  args: {
    children: undefined,
    referenceElement: undefined,
  },
  argTypes: {
    customIcon: {
      options: ["None", "MeatballsIcon", "AddIcon"],
      control: { type: "radio" },
      mapping: {
        None: undefined,
        MeatballsIcon: <MeatballsIcon role="presentation" />,
        AddIcon: <AddIcon role="presentation" />,
      },
    },
  },
} satisfies Meta<typeof PopoverComponent>

export default meta

type Story = StoryObj<typeof meta>

const PopoverWrapper = (
  args: Omit<PopoverProps, "children" | "referenceElement">
): JSX.Element => {
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
}

export const Playground: Story = {
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
  decorators: [
    Story => (
      <div className="h-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const Variants: Story = {
  render: () => (
    <div className="flex pl-32">
      <div className="w-[150px]">
        <PopoverWrapper heading="Default" />
      </div>
      <div className="w-[150px]">
        <PopoverWrapper variant="positive" heading="Positive" />
      </div>
      <div className="w-[150px]">
        <PopoverWrapper variant="informative" heading="Informative" />
      </div>
      <div className="w-[150px]">
        <PopoverWrapper variant="negative" heading="Negative" />
      </div>
      <div className="w-[150px]">
        <PopoverWrapper variant="cautionary" heading="Cautionary" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}
