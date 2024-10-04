import { Meta, StoryObj } from "@storybook/react"
import {
  exampleActionButtonPropsAnchor,
  exampleActionButtonPropsButton,
  exampleDropdownContentEnabled,
  exampleDropdownContentOneDisabled,
} from "~components/Menu/_docs/examples"
import { SplitButton } from "../index"

const meta = {
  title: "Components/Buttons/SplitButton",
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
        Button: exampleActionButtonPropsButton,
        Anchor: exampleActionButtonPropsAnchor,
      },
    },
    dropdownContent: {
      options: [
        "MenuList - MenuItems enabled",
        "MenuList - one MenuItem disabled",
      ],
      control: { type: "select" },
      mapping: {
        "MenuList - MenuItems enabled": exampleDropdownContentEnabled,
        "MenuList - one MenuItem disabled": exampleDropdownContentOneDisabled,
      },
    },
  },
  args: {
    actionButtonProps: exampleActionButtonPropsButton,
    dropdownContent: exampleDropdownContentEnabled,
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

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledMenuItem: Story = {
  args: { dropdownContent: "MenuList - one MenuItem disabled" },
}
