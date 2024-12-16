import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import isChromatic from 'chromatic'
import { FieldMessage } from '~components/FieldMessage'
import { Focusable } from '~components/Focusable'
import { Input } from '~components/Input'
import { Label } from '~components/Label'
import { Text } from '~components/Text'
import { Button, IconButton } from '~components/__actions__/v2'
import { Icon } from '~components/__future__/Icon'
import { Tooltip, TooltipTrigger } from '../index'
import * as TestStories from './Tooltip.spec.stories'

const meta = {
  title: 'Components/Tooltip/Tooltip (Future)/Docs Assets',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    a11y: { disable: true },
  },
  args: {
    defaultOpen: isChromatic(),
  },
  argTypes: {
    UNSTABLE_portalContainer: {
      control: false,
      table: { disable: true },
    },
    triggerRef: { control: false },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultOpen: _, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const Primary: Story = {
  render: () => (
    <TooltipTrigger>
      <IconButton
        label="Add something"
        icon={<Icon name="add" isPresentational />}
        primary
        // Negate the aria description (added by RAC) as it should be the
        // same as the accessible name, therefore no need to duplicate it
        aria-describedby={null}
      />
      <Tooltip>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const Placement: Story = {
  ...TestStories.Placement,
}

export const DoFieldTooltip: Story = {
  render: () => (
    <div>
      <Label>Password</Label>
      <Input type="text" />
      <FieldMessage message="Password must be at least 8 characters." />
    </div>
  ),
}

export const DontFieldTooltip: Story = {
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
  render: () => (
    <div>
      <TooltipTrigger>
        <Focusable>
          <Label>
            Password <Icon name="help" isPresentational isFilled className="text-paragraph" />
          </Label>
        </Focusable>
        <Tooltip>Password must be at least 8 characters</Tooltip>
      </TooltipTrigger>
      <div className="flex gap-4">
        <Input type="text" />
      </div>
    </div>
  ),
}

export const DoConcise: Story = {
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
  render: () => (
    <div>
      <TooltipTrigger>
        <IconButton
          label="Add topic"
          icon={<Icon name="add" isPresentational />}
          primary
          // Negate the aria description (added by RAC) as it should be the
          // same as the accessible name, therefore no need to duplicate it
          aria-describedby={null}
        />
        <Tooltip>Add topic to agenda</Tooltip>
      </TooltipTrigger>
    </div>
  ),
}

export const DontConcise: Story = {
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
  render: () => (
    <div>
      <TooltipTrigger>
        <IconButton
          label="Add something"
          icon={<Icon name="add" isPresentational />}
          primary
          // Negate the aria description (added by RAC) as it should be the
          // same as the accessible name, therefore no need to duplicate it
          aria-describedby={null}
        />
        <Tooltip>
          Add Topic to agenda. This will create a new topic where you can discuss recent work with
          your manager.{' '}
        </Tooltip>
      </TooltipTrigger>
    </div>
  ),
}

export const ShouldFlip: Story = {
  play: undefined,
  render: () => (
    <div className="flex flex-col gap-8 pl-96 overflow-hidden max-w-[250px]">
      <TooltipTrigger>
        <Button label="Should flip" />
        <Tooltip placement="end">Tooltip content</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button label="Won't flip" />
        <Tooltip placement="end" shouldFlip={false}>
          Tooltip content
        </Tooltip>
      </TooltipTrigger>
    </div>
  ),
  parameters: {
    viewport: {
      viewports: {
        small: {
          name: 'small',
          styles: {
            width: '300px',
            height: '300px',
          },
        },
      },
      defaultViewport: 'small',
    },
  },
}

export const UncontrolledState: Story = {
  play: undefined,
  args: { placement: 'end', shouldFlip: false },
  render: () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    return (
      <div className="flex gap-12">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Toggle open
        </button>
        <TooltipTrigger isOpen={isOpen}>
          <Button label="Button" />
          <Tooltip>Tooltip content</Tooltip>
        </TooltipTrigger>
      </div>
    )
  },
}

export const TriggerDo: Story = {
  play: undefined,
  args: { placement: 'end', shouldFlip: false },
  render: () => (
    <Text variant="body" classNameOverride="bg-white p-12 rounded">
      This is an example of an inline{' '}
      <TooltipTrigger>
        <Focusable>
          <a href="#inline-test" className="text-inherit">
            tooltip
          </a>
        </Focusable>
        <Tooltip>Tooltip label</Tooltip>
      </TooltipTrigger>
    </Text>
  ),
}
export const TriggerDont: Story = {
  play: undefined,
  args: { placement: 'end', shouldFlip: false },
  render: () => (
    <Text variant="body" classNameOverride="bg-white p-12 rounded">
      This is an example of an inline{' '}
      <TooltipTrigger>
        <Focusable>
          <span>tooltip</span>
        </Focusable>
        <Tooltip>Tooltip label</Tooltip>
      </TooltipTrigger>
    </Text>
  ),
}
export const TriggerLinkDescription: Story = {
  play: undefined,
  args: { placement: 'end', shouldFlip: false },
  render: () => (
    <Text variant="body" classNameOverride="bg-white p-12 rounded">
      Use tooltips inline when you want to{' '}
      <TooltipTrigger>
        <Focusable>
          <a href="#describe-link" className="text-inherit">
            describe a link
          </a>
        </Focusable>
        <Tooltip>Tooltip label</Tooltip>
      </TooltipTrigger>
      .
    </Text>
  ),
}
