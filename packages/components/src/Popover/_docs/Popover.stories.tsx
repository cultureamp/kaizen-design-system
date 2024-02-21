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

const PopoverTemplate: Story = {
  render: args => {
    const [referenceElementRef, Popover] = usePopover()

    return (
      <div className="kz-text-center kz-relative">
        <button
          type="button"
          className="kz-inline-block kz-mt-112"
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
      <div className="kz-h-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const Variants: Story = {
  render: (args, context) => {
    const Popover = (props: PopoverProps): JSX.Element =>
      PopoverTemplate.render!({ ...args, ...props }, context)
    return (
      <div className="kz-flex kz-pl-32">
        <div className="kz-w-[150px]">
          <Popover {...args} heading="Default" />
        </div>
        <div className="kz-w-[150px]">
          <Popover {...args} variant="positive" heading="Positive" />
        </div>
        <div className="kz-w-[150px]">
          <Popover {...args} variant="informative" heading="Informative" />
        </div>
        <div className="kz-w-[150px]">
          <Popover {...args} variant="negative" heading="Negative" />
        </div>
        <div className="kz-w-[150px]">
          <Popover {...args} variant="cautionary" heading="Cautionary" />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}
