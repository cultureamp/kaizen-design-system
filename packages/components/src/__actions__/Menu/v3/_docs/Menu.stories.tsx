import React, { FunctionComponent } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Popover } from "react-aria-components"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkOffIcon,
  EditIcon,
  MeatballsIcon,
  TrashIcon,
} from "~components/Icon"
import { Button } from "~components/__actions__/v3"
import { Menu, MenuTrigger, MenuItem } from "../index"
import * as testStories from "./Menu.spec.stories"

const meta = {
  title: "Actions/Menu/v3",
  component: MenuTrigger,
  args: {
    defaultOpen: isChromatic(),
    children: <></>,
  },
  subcomponents: { Menu, MenuItem } as Record<string, FunctionComponent<any>>,
} satisfies Meta<typeof MenuTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultOpen: _, ...args }) => (
    <MenuTrigger {...args}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <Button>
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </Button>
      <Popover>
        <Menu>
          <MenuItem icon={<BookmarkOffIcon role="presentation" />}>
            Save
          </MenuItem>
          <MenuItem icon={<EditIcon role="presentation" />}>Edit</MenuItem>
          <MenuItem icon={<ArrowUpIcon role="presentation" />}>
            Move up
          </MenuItem>
          <MenuItem icon={<ArrowDownIcon role="presentation" />}>
            Move down
          </MenuItem>
          <MenuItem icon={<TrashIcon role="presentation" />}>Delete</MenuItem>
        </Menu>
      </Popover>
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
