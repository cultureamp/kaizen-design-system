import React, { FunctionComponent, ReactNode } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Popover } from "react-aria-components"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Button } from "~components/__actions__/v3"
import { Icon } from "~components/__future__/Icon"
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
    <MenuItem icon={<Icon name="bookmark" isPresentational />}>Save</MenuItem>
    <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>
      Edit
    </MenuItem>
    <MenuItem icon={<Icon name="arrow_upward" isPresentational />}>
      Move up
    </MenuItem>
    <MenuItem icon={<Icon name="arrow_downward" isPresentational />}>
      Move down
    </MenuItem>
    <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>
      Delete
    </MenuItem>
  </>
)

export const Actions: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <MenuTrigger {...args}>
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>
            Delete
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const SelectionDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      <Button className="[--icon-size:24]">
        Sort by
        <Icon name="keyboard_arrow_down" isPresentational />
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<Icon name="check" isPresentational />}>
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
      <Button className="[--icon-size:24]">
        Edit item
        <Icon name="keyboard_arrow_down" isPresentational />
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
      <Button className="[--icon-size:24]">
        Actions [visually hidden], conversation with Harper[/visually hidden]
        <Icon name="keyboard_arrow_down" isPresentational />
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
      <Button className="[--icon-size:24]">
        Open menu
        <Icon name="keyboard_arrow_down" isPresentational />
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
      <Popover>
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
      </Popover>
    </MenuTrigger>
  ),
}

export const MenuItemLabelsDont: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
