import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '~components/__future__/Icon'
import { ToggleIconButton } from '../../ToggleIconButton'
import { ToolbarSection } from '../../ToolbarSection'
import { Toolbar } from '../index'

const meta = {
  title: 'Components/RichTextEditor/Subcomponents/Toolbar',
  component: Toolbar,
  args: {
    'aria-controls': 'my-rich-text-editor-id',
    'aria-label': 'Custom Super Toolbar',
    'children': (
      <>
        <ToolbarSection>
          <ToggleIconButton
            label="Bold"
            icon={<Icon name="format_bold" isPresentational />}
          />
          <ToggleIconButton
            label="Italic"
            icon={<Icon name="format_italic" isPresentational />}
          />
          <ToggleIconButton
            label="Underline"
            icon={<Icon name="format_underlined" isPresentational />}
          />
        </ToolbarSection>
        <ToolbarSection>
          <ToggleIconButton
            label="Bullet list"
            icon={
              <Icon
                name="format_list_bulleted"
                isPresentational
                shouldMirrorInRTL
              />
            }
          />
          <ToggleIconButton
            label="Numbered list"
            icon={
              <Icon
                name="format_list_numbered"
                isPresentational
                shouldMirrorInRTL
              />
            }
          />
        </ToolbarSection>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
  },
  decorators: [
    Story => (
      <>
        {/* Must give the toolbar something to control */}
        <Story />
        <div id="my-rich-text-editor-id"></div>
      </>
    ),
  ],
} satisfies Meta<typeof Toolbar>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
