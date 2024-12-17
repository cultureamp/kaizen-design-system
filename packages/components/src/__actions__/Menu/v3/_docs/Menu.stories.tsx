import React, { FunctionComponent } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import isChromatic from 'chromatic'
import { Text } from '~components/Text'
import { Button } from '~components/__actions__/v3'
import { Icon } from '~components/__future__/Icon'
import { Menu, MenuTrigger, MenuItem, MenuPopover, MenuSection, MenuHeader } from '../index'
import * as testStories from './Menu.spec.stories'

const meta = {
  title: 'Components/Menu/Menu (v3)',
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
