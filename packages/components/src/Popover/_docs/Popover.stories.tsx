import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Popover as PopoverComponent, usePopover } from '../index'

const meta = {
  title: 'Components/Popover',
  component: PopoverComponent,
  args: {
    children: undefined,
    referenceElement: undefined,
  },
} satisfies Meta<typeof PopoverComponent>

export default meta

type Story = StoryObj<typeof meta>

const PopoverTemplate: Story = {
  render: (args) => {
    const [referenceElementRef, Popover] = usePopover()

    return (
      <div className="text-center relative">
        <button type="button" className="inline-block mt-112" ref={referenceElementRef}>
          Pop
        </button>
        <Popover {...args} dismissible={true}>
          Popover body that explains something useful. <a href="/">Optional link</a>
        </Popover>
      </div>
    )
  },
}

export const Playground: Story = {
  ...PopoverTemplate,
  decorators: [
    (Story) => (
      <div className="h-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const OpenAndClose: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [referenceElementRef, Popover] = usePopover()

    return (
      <div className="text-center relative">
        <button
          type="button"
          className="inline-block mt-112"
          ref={referenceElementRef}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'Close popover' : 'Open popover'}
        </button>
        {isOpen && (
          <Popover {...args} dismissible={true} onClose={(_e) => setIsOpen(false)}>
            Popover body that explains something useful. <a href="/">Optional link</a>
          </Popover>
        )}
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div className="h-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const OpenOnHover: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [referenceElementRef, Popover] = usePopover()

    return (
      <div className="text-center relative">
        <button
          type="button"
          className="inline-block mt-112"
          ref={referenceElementRef}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        >
          Hover or focus me
        </button>
        {isOpen && (
          <Popover {...args}>
            Popover body that explains something useful. <a href="/">Optional link</a>
          </Popover>
        )}
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div className="h-[300px]">
        <Story />
      </div>
    ),
  ],
}
