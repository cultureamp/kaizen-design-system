import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { ChevronDownIcon, DuplicateIcon } from "~components/Icon"
import { Menu } from "../index"
import { MenuHeading } from "../subcomponents/MenuHeading"
import { MenuItem } from "../subcomponents/MenuItem"
import { MenuList } from "../subcomponents/MenuList"

const meta = {
  title: "Components/Menu",
  component: Menu,
  args: {
    button: (
      <Button
        label="Actions"
        icon={<ChevronDownIcon role="presentation" />}
        iconPosition="end"
      />
    ),
    children: (
      <MenuList>
        <MenuItem
          onClick={() => {
            alert("Duplicated!")
          }}
          icon={<DuplicateIcon role="presentation" />}
          label="Duplicate item"
        />
        <MenuList heading={<MenuHeading>Extra links</MenuHeading>}>
          <MenuItem
            href="https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082059782/Menu"
            label="Learn more about Menu"
          />
        </MenuList>
      </MenuList>
    ),
  },
  argTypes: {
    children: { control: "disabled" },
    button: { control: "disabled" },
  },
} satisfies Meta<typeof Menu>

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
