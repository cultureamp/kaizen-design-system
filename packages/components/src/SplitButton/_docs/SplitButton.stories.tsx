import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { MenuItem, MenuList } from "@kaizen/draft-menu"
import { SplitButton } from "../index"

const ACTION_BUTTON_PROPS__BUTTON = {
  label: "Edit Survey",
  onClick: action("clicked"),
}
const ACTION_BUTTON_PROPS__ANCHOR = {
  label: "Edit Survey",
  href: "//example.com",
}

const DROPDOWN_CONTENT__ENABLED = (
  <MenuList>
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={editIcon}
      label="Menu Item 1"
      onClick={action("clicked")}
    />
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={duplicateIcon}
      label="Menu Item 2"
    />
  </MenuList>
)

const DROPDOWN_CONTENT__ONE_DISABLED = (
  <MenuList>
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={editIcon}
      label="Menu Item 1"
      disabled
    />
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={duplicateIcon}
      label="Menu Item 2"
    />
  </MenuList>
)

const meta = {
  title: "Components/SplitButton",
  component: SplitButton,
  argTypes: {
    actionButtonProps: {
      options: ["Button", "Anchor"],
      control: {
        type: "select",
        labels: {
          Button: '{ label: "Edit Survey", onClick: action("clicked") }',
          Anchor: '{ label: "Edit Survey", href: "//example.com" }',
        },
      },
      mapping: {
        Button: ACTION_BUTTON_PROPS__BUTTON,
        Anchor: ACTION_BUTTON_PROPS__ANCHOR,
      },
    },
    dropdownContent: {
      options: [
        "MenuList - MenuItems enabled",
        "MenuList - one MenuItem disabled",
      ],
      control: { type: "select" },
      mapping: {
        "MenuList - MenuItems enabled": DROPDOWN_CONTENT__ENABLED,
        "MenuList - one MenuItem disabled": DROPDOWN_CONTENT__ONE_DISABLED,
      },
    },
  },
  args: {
    actionButtonProps: ACTION_BUTTON_PROPS__BUTTON,
    dropdownContent: DROPDOWN_CONTENT__ENABLED,
  },
} satisfies Meta<typeof SplitButton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Reversed: Story = {
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}
