import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Icon } from '~components/__next__/Icon'
import { Menu } from '../index'
import { MenuHeading } from '../subcomponents/MenuHeading'
import { MenuItem } from '../subcomponents/MenuItem'
import { MenuList } from '../subcomponents/MenuList'

const meta = {
  title: 'Components/Menu/Menu (deprecated)',
  component: Menu,
  args: {
    button: (
      <Button
        label="Actions"
        icon={<Icon name="keyboard_arrow_down" isPresentational />}
        iconPosition="end"
      />
    ),
    children: (
      <MenuList>
        <MenuItem
          onClick={() => {
            alert('Duplicated!')
          }}
          icon={<Icon name="content_copy" isPresentational isFilled />}
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
    children: { control: false },
    button: { control: false },
  },
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
