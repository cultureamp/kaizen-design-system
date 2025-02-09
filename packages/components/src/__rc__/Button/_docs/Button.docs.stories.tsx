import React from 'react'
import { action } from '@storybook/addon-actions'
import { type Meta, type StoryObj } from '@storybook/react'
import { Badge } from '~components/Badge'
import { EmptyState } from '~components/EmptyState'
import {
  Icon,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  Select,
  Tooltip,
  TooltipTrigger,
} from '~components/__rc__'
import { ReversedColors } from '~components/__utilities__/v3'
import { Button } from '../index'

const meta = {
  title: 'Components/Button/Button (v3)',
  component: Button,
  args: {
    children: 'Label',
    onPress: action('Button onPress event'),
  },
  argTypes: {
    icon: {
      options: ['delete', 'arrow', 'add'],
      mapping: {
        delete: <Icon isPresentational name="delete" />,
        arrow: <Icon isPresentational name="arrow_forward" />,
        add: <Icon isPresentational name="add" />,
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const ButtonVariants: Story = {
  render: (args) => (
    <>
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="tertiary" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const ButtonVariantsReversed: Story = {
  render: (args) => (
    <ReversedColors isReversed={true}>
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="tertiary" />
    </ReversedColors>
  ),
  parameters: {
    reverseColors: true,
    backgrounds: { default: 'Purple 700' },
  },
}

export const ButtonSizes: Story = {
  render: (args) => (
    <>
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
      <Button {...args} size="large" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-8 items-center">
        <Story />
      </div>
    ),
  ],
}

export const ButtonWithIconStart: Story = {
  args: {
    icon: <Icon isPresentational name="delete" />,
  },
}

export const ButtonWithIconEnd: Story = {
  args: {
    icon: <Icon isPresentational name="arrow_forward" shouldMirrorInRTL />,
    iconPosition: 'end',
  },
}

export const IconButton: Story = {
  args: {
    children: 'Remove highlights from: May 8, 2024',
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
  },
}

export const ReversedButton: Story = {
  render: (args) => (
    <ReversedColors isReversed={true}>
      <Button {...args} />
    </ReversedColors>
  ),
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
}

export const ButtonFullWidth: Story = {
  args: {
    isFullWidth: true,
  },
}

export const ButtonWithBadge: Story = {
  args: {
    children: (
      <>
        Label
        <Badge classNameOverride="ms-8" size="small">
          3
        </Badge>
      </>
    ),
  },
}

// Dos and Donts

export const DoExamplePrimaryAndSecondary: Story = {
  render: () => {
    return (
      <>
        <Button variant="primary" className="me-8">
          Submit
        </Button>
        <Button variant="secondary">Cancel</Button>
      </>
    )
  },
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const DontExamplePrimaryAndSecondary: Story = {
  render: () => {
    return (
      <>
        <Button variant="primary" className="me-8">
          Submit
        </Button>
        <Button variant="primary">Cancel</Button>
      </>
    )
  },
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const DoExampleCta: Story = {
  render: () => {
    return (
      <>
        <EmptyState
          headingProps={{ children: 'Lorem', variant: 'heading-2', tag: 'span' }}
          bodyText="Ipsum dolor sit amet consectetur adipisicing elit."
        >
          <Button size="large">Action</Button>
        </EmptyState>
      </>
    )
  },
}

export const DoExampleDefaultToMediumSize: Story = {
  render: () => {
    return (
      <>
        <Select items={[]} label="Choose country"></Select>
        <Button className="mt-8">Save</Button>
      </>
    )
  },
}

export const DontExampleDefaultToMediumSize: Story = {
  render: () => {
    return (
      <>
        <Select items={[]} label="Choose country"></Select>
        <Button className="mt-8" variant="primary" size="small">
          Save
        </Button>
      </>
    )
  },
}

export const DoExampleUseIconsSparingly: Story = {
  args: {
    children: 'Add user',
    icon: <Icon isPresentational name="add" />,
    iconPosition: 'end',
  },
}

export const DontExampleUseIconsSparingly: Story = {
  args: {
    children: 'Add user',
    icon: <Icon isPresentational name="star" />,
    iconPosition: 'end',
  },
}

export const DoExampleUseTooltips: Story = {
  args: {
    children: 'Delete',
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
    variant: 'tertiary',
  },
  render: (args) => (
    <TooltipTrigger>
      <Button {...args} />
      <Tooltip>Delete content</Tooltip>
    </TooltipTrigger>
  ),
}

export const DontExampleUseTooltips: Story = {
  args: {
    children: 'Delete',
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
    variant: 'tertiary',
  },
}

export const DoExampleMenuButton: Story = {
  render: () => (
    <MenuTrigger defaultOpen={false}>
      <Button
        variant="secondary"
        icon={<Icon name="keyboard_arrow_down" isPresentational />}
        iconPosition="end"
      >
        Manage
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem icon={<Icon name="bookmark" isPresentational />}>Save</MenuItem>
          <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>Edit</MenuItem>
          <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const DoExampleKebabMenuButton: Story = {
  render: () => (
    <TooltipTrigger>
      <MenuTrigger defaultOpen={false}>
        <Button
          variant="secondary"
          icon={<Icon name="more_horiz" isPresentational />}
          iconPosition="end"
          hasHiddenLabel
        >
          Manage
        </Button>
        <MenuPopover>
          <Menu>
            <MenuItem icon={<Icon name="bookmark" isPresentational />}>Save</MenuItem>
            <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>Edit</MenuItem>
            <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>Delete</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
      <Tooltip>Manage</Tooltip>
    </TooltipTrigger>
  ),
}

export const DoExampleMinimalPunctuation: Story = {
  args: {
    children: 'View tour',
    variant: 'secondary',
  },
}

export const DontExampleMinimalPunctuation: Story = {
  args: {
    children: "What's new?",
    variant: 'secondary',
  },
}

export const DoExampleSecondPerson: Story = {
  args: {
    children: 'View your reports',
    variant: 'secondary',
  },
}

export const DontExampleSecondPerson: Story = {
  args: {
    children: 'View my reports',
    variant: 'secondary',
  },
}

export const DoExampleFunctionalLabels: Story = {
  args: {
    children: 'Edit report',
    variant: 'secondary',
  },
}

export const DontExampleFunctionalLabels: Story = {
  args: {
    children: 'Edit',
    variant: 'secondary',
  },
}

export const DoExampleClearAndConciseLabels: Story = {
  args: {
    children: 'Save',
    variant: 'secondary',
  },
}

export const DontExampleClearAndConciseLabels: Story = {
  args: {
    children: 'Go to next step',
    variant: 'secondary',
  },
}

export const DoExampleDeclareContext: Story = {
  args: {
    children: 'Create survey',
    variant: 'secondary',
  },
}

export const DontExampleDeclareContext: Story = {
  args: {
    children: 'Create',
    variant: 'secondary',
  },
}
