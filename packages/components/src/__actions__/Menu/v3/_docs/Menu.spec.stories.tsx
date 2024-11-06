import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within, fn } from "@storybook/test"
import isChromatic from "chromatic"
import { Popover, Header, Section } from "react-aria-components"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Button } from "~components/__actions__/v3"
import { Icon } from "~components/__future__/Icon"
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
      <Popover>
        <Menu>
          <Section>
            <Header>Section One</Header>
            <MenuItem
              icon={<Icon name="bookmark" isPresentational />}
              href="https://cultureamp.com"
            >
              Save
            </MenuItem>
            <MenuItem icon={<Icon name="edit" isPresentational isFilled />}>
              Edit
            </MenuItem>
          </Section>
          <Section>
            <MenuItem icon={<Icon name="arrow_upward" isPresentational />}>
              Move Up
            </MenuItem>
            <MenuItem icon={<Icon name="arrow_downward" isPresentational />}>
              Menu item with a longer label
            </MenuItem>
          </Section>
          <Section>
            <MenuItem icon={<Icon name="delete" isPresentational isFilled />}>
              Delete
            </MenuItem>
            <MenuItem
              icon={<Icon name="delete" isPresentational isFilled />}
              isDisabled
            >
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>

      <Popover>
        <Menu>
          <MenuItem
            icon={<Icon name="warning" isPresentational isFilled />}
            onAction={() => alert("Menu item pressed")}
          >
            Trigger an alert
          </MenuItem>
          <MenuItem
            icon={<Icon name="open_in_new" isPresentational />}
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
      <Button size="large" icon={<Icon name="more_horiz" isPresentational />}>
        <VisuallyHidden>Additional actions</VisuallyHidden>
      </Button>
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
          <Button>
            <Icon name="more_horiz" alt="Additional actions" />
          </Button>
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
