import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import isChromatic from 'chromatic'
import { Button, IconButton } from '~components/Button'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '~components/Tabs'
import { Text } from '~components/Text'
import { Icon } from '~components/__rc__/Icon'
import { Tag } from '~components/__rc__/Tag'
import { Tooltip, TooltipTrigger, Focusable } from '../index'

const meta = {
  title: 'Components/Tooltip/Tooltip (v3)/Tests',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultOpen: isChromatic(),
  },
  argTypes: {
    UNSTABLE_portalContainer: {
      control: false,
      table: { disable: true },
    },
    triggerRef: { control: false },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

// TODO: update this to use the new button component v3

export const OnButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.queryByRole('button') ?? canvas.getByRole('link')

    await step('Hover shows', async () => {
      await userEvent.unhover(button)
      await userEvent.hover(button)
      await waitFor(() => expect(canvas.getByRole('tooltip')).toBeVisible())
      expect(button).toHaveAttribute('aria-describedby', canvas.getByRole('tooltip').id)
      await userEvent.unhover(button)
    })

    await step('Focus shows', async () => {
      await userEvent.tab() // focus
      await waitFor(() => expect(canvas.getByRole('tooltip')).toBeVisible())
      await userEvent.tab() // unfocus
      await waitFor(() => expect(canvas.queryByRole('tooltip')).toBeNull())
    })

    await step('Escape closes', async () => {
      await userEvent.tab() // focus
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(canvas.queryByRole('tooltip')).toBeNull())
      await userEvent.tab() // unfocus
    })
  },
}

export const OnLink: Story = {
  ...OnButton,
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" href="#" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButtonWithDesc: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <>
      <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
        <IconButton
          label="(TESTING) Add label"
          icon={<Icon name="add" isPresentational />}
          primary
          aria-describedby="blah"
        />
        <Tooltip {...args}>Tooltip content</Tooltip>
      </TooltipTrigger>
      <Text variant="body" id="blah" classNameOverride="p-4">
        This is target of aria-describedby
      </Text>
    </>
  ),
}

export const OnIconButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <IconButton
        label="Add something"
        icon={<Icon name="add" isPresentational />}
        primary
        // Negate the aria description (added by RAC) as it should be the
        // same as the accessible name, therefore no need to duplicate it
        aria-describedby={null}
      />
      <Tooltip {...args}>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" disabled />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButtonAnchor: Story = {
  name: 'On Button with custom <a>',
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button
        label="Button"
        component={(props) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a {...props} href="#" style={{ padding: '0 1rem' }}>
            Custom Link
          </a>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButton: Story = {
  ...OnButton,
  name: 'On Button with custom <button>',
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" component={(props) => <button type="button" {...props} />} />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomFocusableElement: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnTabs: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <Tabs>
      <TabList aria-label="Tabs">
        <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
          <Tab>Tab 1</Tab>
          <Tooltip {...args}>Tooltip content</Tooltip>
        </TooltipTrigger>
      </TabList>
      <TabPanels>
        <TabPanel classNameOverride="p-24 font-family-paragraph">Tab content</TabPanel>
      </TabPanels>
    </Tabs>
  ),
}

export const Placement: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args} placement="top" shouldFlip={false}>
        Placement top
      </Tooltip>
      <Tooltip {...args} placement="end" shouldFlip={false}>
        Placement end
      </Tooltip>
      <Tooltip {...args} placement="bottom" shouldFlip={false}>
        Placement bottom
      </Tooltip>
      <Tooltip {...args} placement="start" shouldFlip={false}>
        Placement start
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const ReversedColors: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    reverseColors: true,
  },
}
