import React, { FunctionComponent, ReactNode } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import isChromatic from 'chromatic'
import { Button } from '~components/__rc__/Button'
import { Icon } from '~components/__rc__/Icon'
import { Menu, MenuItem, MenuTrigger, MenuPopover, MenuSection, MenuHeader } from '../index'

const meta = {
  title: 'Components/Menu/Menu (v3)/Docs Assets',
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

const DefaultMenuItems = (): ReactNode => (
  <>
    <MenuItem icon={<Icon name="bookmark" isPresentational />}>Save</MenuItem>
    <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>Edit</MenuItem>
    <MenuItem icon={<Icon name="arrow_upward" isPresentational />}>Move up</MenuItem>
    <MenuItem icon={<Icon name="arrow_downward" isPresentational />}>Move down</MenuItem>
    <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>Delete</MenuItem>
  </>
)

export const Actions: Story = {
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
          <MenuItem href="https://cultureamp.com">Action that navigates</MenuItem>
          <MenuItem onAction={() => null}>Non-navigation action</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const ItemsDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
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
          <DefaultMenuItems />
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const ItemsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
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
          <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const SelectionDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button variant="secondary" className="[--icon-size:24]">
        Sort by
        <Icon name="keyboard_arrow_down" isPresentational />
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem icon={<Icon name="check" isPresentational />}>Recommended</MenuItem>
          <MenuItem>Most recent</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const LabelChevronDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button variant="secondary" className="[--icon-size:24]">
        Edit item
        <Icon name="keyboard_arrow_down" isPresentational />
      </Button>
      <MenuPopover>
        <Menu>
          <DefaultMenuItems />
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const LabelChevronDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button variant="secondary">Edit item</Button>
      <MenuPopover>
        <Menu>
          <DefaultMenuItems />
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const LabelDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button variant="secondary" className="[--icon-size:24]">
        Actions [visually hidden], conversation with Harper[/visually hidden]
        <Icon name="keyboard_arrow_down" isPresentational />
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <DefaultMenuItems />
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const LabelDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button variant="secondary" className="[--icon-size:24]">
        Open menu
        <Icon name="keyboard_arrow_down" isPresentational />
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <DefaultMenuItems />
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const IconsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>
            Edit &lsquo;Strengths&rsquo;
          </MenuItem>
          <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>
            Edit &lsquo;Weaknesses&rsquo;
          </MenuItem>
          <MenuItem>Export PDF</MenuItem>
          <MenuItem>Export Powerpoint</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const MenuItemLabelsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem>Save comment</MenuItem>
          <MenuItem>Edit comment</MenuItem>
          <MenuItem>Delete comment</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const SentenceCaseDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem>Quick export</MenuItem>
          <MenuItem>Open a copy</MenuItem>
          <MenuItem>Share a link</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const SentenceCaseDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem>Quick Export</MenuItem>
          <MenuItem>Open A Copy</MenuItem>
          <MenuItem>Share A Link</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const ElipsesDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem>Quick export</MenuItem>
          <MenuItem>Open a copy</MenuItem>
          <MenuItem>Share a link</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const ElipsesDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button
        size="large"
        icon={<Icon name="more_horiz" isPresentational />}
        variant="secondary"
        hasHiddenLabel
      >
        Additional actions
      </Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem>Quick export…</MenuItem>
          <MenuItem>Open a copy…</MenuItem>
          <MenuItem>Share a link…</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}
