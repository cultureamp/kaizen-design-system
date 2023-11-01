import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BoldIcon, ItalicsIcon, UnderlineIcon } from "~components/Icon"
import { ToggleIconButton } from "../../ToggleIconButton"
import { ToolbarSection } from "../../ToolbarSection"
import { Toolbar } from "../index"

const meta = {
  title: "Components/RichTextEditor/subcomponents/Toolbar",
  component: Toolbar,
  args: {
    "aria-controls": "my-rich-text-editor-id",
    "aria-label": "Custom Super Toolbar",
    children: (
      <ToolbarSection>
        <ToggleIconButton
          label="Bold"
          icon={<BoldIcon role="presentation" />}
        />
        <ToggleIconButton
          label="Italic"
          icon={<ItalicsIcon role="presentation" />}
        />
        <ToggleIconButton
          label="Underline"
          icon={<UnderlineIcon role="presentation" />}
        />
      </ToolbarSection>
    ),
  },
  argTypes: {
    children: { control: "disable" },
  },
} satisfies Meta<typeof Toolbar>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
