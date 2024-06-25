import React, { FunctionComponent } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Menu, MenuTrigger, MenuItem } from "../index"
import * as testStories from "./Menu.spec.stories"

const meta = {
  title: "Actions/Menu/v3",
  component: Menu,
  args: {
    // @ts-ignore
    defaultOpen: isChromatic(),
  },
  subcomponents: { MenuTrigger, MenuItem } as Record<
    string,
    FunctionComponent<any>
  >,
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

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
export const Submenu: Story = {
  ...testStories.Submenu,
  play: undefined,
}
