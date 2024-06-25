import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within, fn } from "@storybook/test"
import isChromatic from "chromatic"
import { Button as RACButton } from "react-aria-components"
import { Button } from "~components/Button"
import { DuplicateIcon, MeatballsIcon } from "~components/Icon"
import { Popover } from "~components/__overlays__/v3"
import {
  Menu,
  MenuItem,
  MenuTrigger,
  MenuHeader,
  MenuSection,
  SubmenuTrigger,
} from "../index"

const meta = {
  title: "Actions/Menu/v3/Tests",
  component: Menu,
  args: {
    // @ts-ignore
    defaultOpen: isChromatic(),
  },
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  // @ts-ignore
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu {...args}>
          <MenuItem>
            <DuplicateIcon role="presentation" />
            Item 1
          </MenuItem>
          <MenuItem>
            <DuplicateIcon role="presentation" />
            Item 2
          </MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const menuButton = canvas.getByRole("button")

    await step("Menu opens on click", async () => {
      await userEvent.click(menuButton)
      await waitFor(() => expect(canvas.getByRole("menu")).toBeVisible())
    })

    await step("Arrow keys adjust focus", async () => {
      await userEvent.keyboard("[ArrowDown]")
      await waitFor(() =>
        expect(canvas.getByRole("menuitem", { name: "Item 2" })).toHaveFocus()
      )
    })

    await step("Esc closes menu", async () => {
      await userEvent.keyboard("[Escape]")
      await waitFor(() =>
        expect(canvas.queryByRole("menu")).not.toBeInTheDocument()
      )
    })

    await step("Menu opens on enter press", async () => {
      await userEvent.keyboard("[Enter]")
      await waitFor(() =>
        expect(canvas.getByRole("menuitem", { name: "Item 1" })).toHaveFocus()
      )
      await userEvent.keyboard("[Escape]")
    })

    await step("Menu opens on arrow up/down", async () => {
      await userEvent.keyboard("[ArrowDown]")
      await waitFor(() =>
        expect(canvas.getByRole("menuitem", { name: "Item 1" })).toHaveFocus()
      )
      await userEvent.keyboard("[Escape]")

      await userEvent.keyboard("[ArrowUp]")
      await waitFor(() =>
        expect(canvas.getByRole("menuitem", { name: "Item 5" })).toHaveFocus()
      )
    })
  },
}

const mockOnClick = fn()
export const DisabledItems: Story = {
  render: () => (
    <MenuTrigger>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuItem isDisabled onAction={mockOnClick}>
            Item 1
          </MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem isDisabled>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const menuButton = canvas.getByRole("button")

    await step("Disabled items are unable to be focused", async () => {
      await userEvent.click(menuButton)
      expect(canvas.getByRole("menuitem", { name: "Item 2" })).toHaveFocus()
      await userEvent.keyboard("[ArrowDown]")
      await userEvent.keyboard("[ArrowDown]")
      expect(canvas.getByRole("menuitem", { name: "Item 5" })).toHaveFocus()
      await userEvent.keyboard("[Escape]")
    })

    await step("Clicking a disabled item doesn't trigger onClick", async () => {
      await userEvent.click(menuButton)
      await userEvent.click(canvas.getByRole("menuitem", { name: "Item 1" }))
      await waitFor(() => expect(mockOnClick).not.toBeCalled())
    })
  },
}

export const WithSections: Story = {
  render: () => (
    <MenuTrigger>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
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

export const Controlled: Story = {
  render: () => {
    const [isOpen, setOpen] = useState<boolean>(true)
    return (
      <>
        <Button
          onClick={() => setOpen(!isOpen)}
          label="Toggle menu externally"
          classNameOverride="mb-6"
        />
        <MenuTrigger isOpen={isOpen} onOpenChange={setOpen}>
          {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
          <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
            <MeatballsIcon role="img" aria-label="Additional actions" />
          </RACButton>
          <Popover>
            <Menu>
              <MenuItem>Item 1</MenuItem>
              <MenuItem onAction={() => setOpen(true)}>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
              <MenuItem>Item 4</MenuItem>
              <MenuItem>Item 5</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const externalButton = canvas.getByRole("button", {
      name: "Toggle menu externally",
    })

    await step("Menu opens on external button click", async () => {
      await userEvent.click(externalButton)
      await waitFor(() => expect(canvas.getByRole("menu")).toBeVisible())
    })
  },
}

export const Submenu: Story = {
  render: () => (
    <MenuTrigger>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuItem>
            <DuplicateIcon role="presentation" />
            Item 1
          </MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
          <SubmenuTrigger>
            <MenuItem>
              <DuplicateIcon role="presentation" />
              Submenu trigger
            </MenuItem>
            <Popover>
              <Menu>
                <MenuItem>Submenu item 1</MenuItem>
                <MenuItem>Submenu item 2</MenuItem>
              </Menu>
            </Popover>
          </SubmenuTrigger>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const menuButton = canvas.getByRole("button")

    await step("Submenu opens on click of trigger", async () => {
      await userEvent.click(menuButton)
      await userEvent.hover(
        canvas.getByRole("menuitem", { name: "Submenu trigger" })
      )
      await waitFor(() =>
        expect(
          canvas.getByRole("menuitem", { name: "Submenu item 1" })
        ).toBeVisible()
      )
      await userEvent.keyboard("[Escape]")
    })

    await step("Submenu opens on right arrow press", async () => {
      await userEvent.keyboard("[ArrowUp]")
      await userEvent.keyboard("[ArrowRight]")
      await waitFor(() =>
        expect(
          canvas.getByRole("menuitem", { name: "Submenu item 1" })
        ).toHaveFocus()
      )
    })
  },
}
