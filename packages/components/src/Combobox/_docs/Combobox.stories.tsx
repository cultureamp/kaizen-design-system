import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Popover } from "react-aria-components"
import { Listbox, ListboxItem } from "../../"
import { ComboboxPopoverToggle } from "../subcomponents/ComboboxPopoverToggle"
import { Combobox, ComboboxInput, ComboboxClearButton } from "../"

const meta = {
  title: "Pickers/Combobox",
  component: Combobox,
  args: {
    children: (
      <>
        <div className="relative">
          <ComboboxInput />
          <ComboboxPopoverToggle />
          <ComboboxClearButton />
        </div>
        <Popover style={{ overflowY: "auto" }}>
          <Listbox>
            <ListboxItem id="lettuce">Lettuce</ListboxItem>
            <ListboxItem id="tomato">Tomato</ListboxItem>
            <ListboxItem id="cheese">Cheese</ListboxItem>
            <ListboxItem id="ham">Ham</ListboxItem>
            <ListboxItem id="pickles">Pickles</ListboxItem>
          </Listbox>
        </Popover>
      </>
    ),
  },
} satisfies Meta<typeof Combobox>

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
  args: {},
}
