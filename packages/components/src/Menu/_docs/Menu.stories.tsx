import React, { type FunctionComponent } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import isChromatic from 'chromatic'
import { Text } from '~components/Text'
import { Button } from '~components/Button'
import { Icon } from '~components/Icon'
import { Menu, MenuHeader, MenuItem, MenuPopover, MenuSection, MenuTrigger } from '../index'
import * as testStories from './Menu.spec.stories'

const meta = {
  title: 'Components/Menu/Menu (next)',
  component: MenuTrigger,
  args: {
    defaultOpen: isChromatic(),
    children: <></>,
  },
  subcomponents: { Menu, MenuItem, MenuPopover, MenuSection, MenuHeader } as Record<
    string,
    FunctionComponent<any>
  >,
} satisfies Meta<typeof MenuTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <MenuTrigger {...args}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem icon={<Icon name="bookmark" isPresentational />}>Save</MenuItem>
          <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>Edit</MenuItem>
          <MenuItem icon={<Icon name="arrow_upward" isPresentational />}>Move up</MenuItem>
          <MenuItem icon={<Icon name="arrow_downward" isPresentational />}>Move down</MenuItem>
          <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const Basic: Story = { ...testStories.Basic, play: undefined }
export const DisabledItems: Story = {
  ...testStories.DisabledItems,
  play: undefined,
}
export const WithSections: Story = {
  ...testStories.WithSections,
  play: undefined,
}
export const Controlled: Story = {
  ...testStories.Controlled,
  play: undefined,
}

export const RichContent: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <MenuTrigger {...args}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem textValue="Save">
            <div>Save</div>
            <Text tag="div" variant="extra-small">
              Saves all data
            </Text>
          </MenuItem>
          <MenuItem textValue="Edit">
            <div>Edit</div>
            <Text tag="div" variant="extra-small">
              Adjust the name and description
            </Text>
          </MenuItem>
          <MenuItem textValue="Delete">
            Delete
            <Text tag="div" variant="extra-small">
              Completely remove, cannot be undone
            </Text>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const Sections: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <MenuTrigger {...args}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu>
          <MenuSection>
            <MenuHeader>Adjust</MenuHeader>
            <MenuItem icon={<Icon name="bookmark" isPresentational />}>Save</MenuItem>
            <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>Edit</MenuItem>
          </MenuSection>
          <MenuSection>
            <MenuHeader>Order</MenuHeader>
            <MenuItem icon={<Icon name="arrow_upward" isPresentational />}>Move up</MenuItem>
            <MenuItem icon={<Icon name="arrow_downward" isPresentational />}>Move down</MenuItem>
            <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>Delete</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const ButtonMenuPattern: Story = {
  name: 'Button + Menu Pattern',
  render: ({ defaultOpen: _, ...args }) => (
    <div className="flex gap-4">
      <Button size="large" variant="secondary">
        Edit Survey
      </Button>
      <MenuTrigger {...args}>
        <Button
          size="large"
          icon={<Icon name="more_horiz" isPresentational />}
          variant="secondary"
          hasHiddenLabel
        >
          More surveys
        </Button>
        <MenuPopover>
          <Menu>
            <MenuItem>Survey 1</MenuItem>
            <MenuItem>Survey 2</MenuItem>
            <MenuItem>Survey 3</MenuItem>
            <MenuItem>Survey 4</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </div>
  ),
}
