import React, { FunctionComponent, ReactNode } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Popover } from "react-aria-components"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkOffIcon,
  CheckIcon,
  ChevronDownIcon,
  EditIcon,
  MeatballsIcon,
  TrashIcon,
} from "~components/Icon"
import { Button } from "~components/__actions__/v3"
import { Menu, MenuItem, MenuTrigger } from "../index"

const meta = {
  title: "Actions/Menu/v3/Docs Assets",
  component: MenuTrigger,
  args: {
    defaultOpen: isChromatic(),
    children: <></>,
  },
  subcomponents: { Menu, MenuItem } as Record<string, FunctionComponent<any>>,
} satisfies Meta<typeof MenuTrigger>

export default meta

type Story = StoryObj<typeof meta>

const DefaultMenuItems = (): ReactNode => (
  <>
    <MenuItem icon={<BookmarkOffIcon role="presentation" />}>Save</MenuItem>
    <MenuItem icon={<EditIcon role="presentation" />}>Edit</MenuItem>
    <MenuItem icon={<ArrowUpIcon role="presentation" />}>Move Up</MenuItem>
    <MenuItem icon={<ArrowDownIcon role="presentation" />}>Move Down</MenuItem>
    <MenuItem icon={<TrashIcon role="presentation" />}>Delete</MenuItem>
  </>
)

export const Actions: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <MenuTrigger {...args}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuItem href="https://cultureamp.com">
            Action that navigates
          </MenuItem>
          <MenuItem onAction={() => null}>Non-navigation action</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const ItemsDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <DefaultMenuItems />
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const ItemsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<TrashIcon role="presentation" />}>Delete</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const SelectionDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button>
        Sort by
        <ChevronDownIcon role="presentation" />
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<CheckIcon role="presentation" />}>
            Recommended
          </MenuItem>
          <MenuItem>Most recent</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const LabelChevronDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <Button>
        Edit item
        <ChevronDownIcon role="presentation" />
      </Button>
      <Popover>
        <Menu>
          <DefaultMenuItems />
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const LabelChevronDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button>Edit item</Button>
      <Popover>
        <Menu>
          <DefaultMenuItems />
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const LabelDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button>
        Actions [visually hidden], conversation with Harper[/visually hidden]
        <ChevronDownIcon role="presentation" />
      </Button>
      <Popover>
        <Menu {...args}>
          <DefaultMenuItems />
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const LabelDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button>
        Open menu
        <ChevronDownIcon role="presentation" />
      </Button>
      <Popover>
        <Menu {...args}>
          <DefaultMenuItems />
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const IconsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu {...args}>
          <MenuItem icon={<EditIcon role="presentation" />}>
            Edit &lsquo;Strengths&rsquo;
          </MenuItem>
          <MenuItem icon={<EditIcon role="presentation" />}>
            Edit &lsquo;Weaknesses&rsquo;
          </MenuItem>
          <MenuItem>Export PDF</MenuItem>
          <MenuItem>Export Powerpoint</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const MenuItemLabelsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu {...args}>
          <MenuItem>Save comment</MenuItem>
          <MenuItem>Edit comment</MenuItem>
          <MenuItem>Delete comment</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const SentenceCaseDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu {...args}>
          <MenuItem>Quick export</MenuItem>
          <MenuItem>Open a copy</MenuItem>
          <MenuItem>Share a link</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const SentenceCaseDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu {...args}>
          <MenuItem>Quick Export</MenuItem>
          <MenuItem>Open A Copy</MenuItem>
          <MenuItem>Share A Link</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const ElipsesDo: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu {...args}>
          <MenuItem>Quick export</MenuItem>
          <MenuItem>Open a copy</MenuItem>
          <MenuItem>Share a link</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const ElipsesDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu {...args}>
          <MenuItem>Quick export…</MenuItem>
          <MenuItem>Open a copy…</MenuItem>
          <MenuItem>Share a link…</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}
