import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Icon } from '~components/__rc__/Icon'
import { Menu, MenuHeading, MenuItem, MenuList } from '../../index'
import * as MenuV1Stories from '../Menu.stories'

const meta = {
  title: 'Components/Menu/Menu (v2)',
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
            destructive
          />
        </MenuList>
      </MenuList>
    ),
  },
  decorators: [
    (Story) => (
      <div className="flex mt-[60px] gap-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = MenuV1Stories.Playground
