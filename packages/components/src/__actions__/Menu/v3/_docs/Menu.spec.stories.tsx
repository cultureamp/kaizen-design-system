import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within, fn } from "@storybook/test"
import isChromatic from "chromatic"
import {
  Button as RACButton,
  Popover,
  Header,
  Section,
} from "react-aria-components"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkOffIcon,
  CautionIcon,
  EditIcon,
  ExternalLinkIcon,
  MeatballsIcon,
  TrashIcon,
} from "~components/Icon"
import { Menu, MenuItem, MenuTrigger } from "../index"

const meta = {
  title: "Actions/Menu/v3/Tests",
  component: MenuTrigger,
  args: {
    defaultOpen: isChromatic(),
    children: <></>,
  },
} satisfies Meta<typeof MenuTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const KitchenSink: Story = {
  parameters: {
    chromatic: { disable: false },
  },
  args: {
    defaultOpen: true,
  },
  decorators: [
    Story => (
      <div style={{ height: "500px" }}>
        <Story />
      </div>
    ),
  ],
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <Section>
            <Header>Section One</Header>
            <MenuItem
              icon={<BookmarkOffIcon role="presentation" />}
              href="https://cultureamp.com"
            >
              Save
            </MenuItem>
            <MenuItem icon={<EditIcon role="presentation" />}>Edit</MenuItem>
          </Section>
          <Section>
            <MenuItem icon={<ArrowUpIcon role="presentation" />}>
              Move Up
            </MenuItem>
            <MenuItem icon={<ArrowDownIcon role="presentation" />}>
              Menu item with a longer label
            </MenuItem>
          </Section>
          <Section>
            <MenuItem icon={<TrashIcon role="presentation" />}>Delete</MenuItem>
            <MenuItem icon={<TrashIcon role="presentation" />} isDisabled>
              Delete but disabled
            </MenuItem>
            <MenuItem>Other action</MenuItem>
            <MenuItem>Other action</MenuItem>
            <MenuItem>Other action</MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const Basic: Story = {
  render: ({ defaultOpen, ...args }) => (
    <MenuTrigger defaultOpen={defaultOpen} {...args}>
      {/* Replace with Kaizen Button once we have v3 or backwards compatibility */}
      <RACButton className="bg-white border border-gray-500 rounded p-8 flex">
        <MeatballsIcon role="img" aria-label="Additional actions" />
      </RACButton>
      <Popover>
        <Menu>
          <MenuItem
            icon={<CautionIcon role="presentation" />}
            onAction={() => alert("Menu item pressed")}
          >
            Trigger an alert
          </MenuItem>
          <MenuItem
            icon={<ExternalLinkIcon role="presentation" />}
            href="https://cultureamp.com"
            target="_blank"
          >
            Go to cultureamp.com
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
        expect(
          canvas.getByRole("menuitem", { name: "Go to cultureamp.com" })
        ).toHaveFocus()
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
        expect(
          canvas.getByRole("menuitem", { name: "Trigger an alert" })
        ).toHaveFocus()
      )
      await userEvent.keyboard("[Escape]")
    })

    await step("Menu opens on arrow up/down", async () => {
      await userEvent.keyboard("[ArrowDown]")
      await waitFor(() =>
        expect(
          canvas.getByRole("menuitem", { name: "Trigger an alert" })
        ).toHaveFocus()
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
          <Section>
            <Header>Section One</Header>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </Section>

          <Section>
            <Header>Section Two</Header>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
            <MenuItem>Item 5</MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
      <>
        <button type="button" onClick={() => setOpen(!isOpen)} className="mb-6">
          Toggle open
        </button>
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
    const externalButton = await canvas.findByRole("button", {
      name: "Toggle open",
    })

    await step("Menu opens on external button click", async () => {
      await userEvent.click(externalButton)
      await waitFor(() => expect(canvas.getByRole("menu")).toBeVisible())
    })
  },
}
