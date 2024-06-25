/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button as RACButton } from "react-aria-components"
import { Button } from "~components/Button"
import { DuplicateIcon, MeatballsIcon } from "~components/Icon"
import { Popover } from "~components/__overlays__/v3"
import { Menu, MenuItem, MenuTrigger, MenuHeader, MenuSection } from "../index"

const meta = {
  title: "Actions/Menu/v3",
  component: Menu,
  args: {},
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <MenuTrigger>
      {/* @todo: replace with Kaizen button once it has implemented react aria's useButton */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuItem>
            <DuplicateIcon role="presentation" classNameOverride="me-8" />
            Item 1
          </MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const WithSections: Story = {
  render: () => (
    <MenuTrigger>
      {/* @todo: replace with Kaizen button once it has implemented react aria's useButton */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuSection>
            <MenuHeader>Section One</MenuHeader>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </MenuSection>

          <MenuSection>
            <MenuHeader>Section Two</MenuHeader>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
            <MenuItem>Item 5</MenuItem>
          </MenuSection>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const DisabledItems: Story = {
  render: () => (
    <MenuTrigger>
      {/* @todo: replace with Kaizen button once it has implemented react aria's useButton */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuItem isDisabled>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [isOpen, setOpen] = useState<boolean>(true)
    return (
      <>
        <Button
          onClick={() => setOpen(!isOpen)}
          label="Toggle menu"
          classNameOverride="mb-6"
        />
        <MenuTrigger isOpen={isOpen} onOpenChange={setOpen}>
          {/* @todo: replace with Kaizen button once it has implemented react aria's useButton */}
          <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
            <MeatballsIcon role="img" aria-label="Additional actions" />
          </RACButton>
          <Popover>
            <Menu>
              <MenuItem isDisabled>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
              <MenuItem>Item 4</MenuItem>
              <MenuItem>Item 5</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </>
    )
  },
}
