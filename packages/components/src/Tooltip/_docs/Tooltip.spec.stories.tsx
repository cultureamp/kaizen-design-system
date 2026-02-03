import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { expect, userEvent, waitFor, within } from 'storybook/test'
import isChromatic from 'chromatic'
import { Button } from '~components/Button'
import { Focusable } from '~components/Focusable'
import { Icon } from '~components/Icon'
import { LinkButton } from '~components/LinkButton'
import { Tab, TabList, TabPanel, Tabs } from '~components/Tabs'
import { Tag } from '~components/Tag'
import { Text } from '~components/Text'
import { Tooltip, TooltipTrigger } from '../index'

const meta = {
  title: 'Components/Tooltip/Tests',
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
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

export const OnButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button>Button</Button>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.queryByRole('button') ?? canvas.getByRole('link')

    await step('Hover shows', async () => {
      await waitFor(() => userEvent.click(canvasElement)) // needed to refocus the browser window

      await userEvent.hover(button)
      await expect(await canvas.findByRole('tooltip')).toBeInTheDocument()
      await expect((await canvas.findByRole('tooltip')).checkVisibility()).toBe(true)
      await expect(button).toHaveAttribute('aria-describedby', canvas.getByRole('tooltip').id)
      await userEvent.unhover(button)
    })

    await step('Focus shows', async () => {
      await waitFor(() => userEvent.click(canvasElement)) // needed to refocus the browser window

      await userEvent.tab() // focus
      await expect((await canvas.findByRole('tooltip')).checkVisibility()).toBe(true)
      await expect(await canvas.findByRole('tooltip')).toBeInTheDocument()
      await userEvent.tab() // unfocus
      waitFor(() => expect(canvas.queryByRole('tooltip')).toBeNull())
      waitFor(async () => expect(await canvas.queryByText('Tooltip content')).toBeNull())
    })

    await step('Escape closes', async () => {
      await waitFor(() => userEvent.click(canvasElement)) // needed to refocus the browser window

      await userEvent.tab() // focus
      await waitFor(() => expect(canvas.getByRole('tooltip')).toBeVisible())
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(canvas.queryByRole('tooltip')).toBeNull(), {
        timeout: 5000,
      })
      await userEvent.tab() // unfocus
    })
  },
}

export const OnLink: Story = {
  ...OnButton,
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <LinkButton href="#">Button</LinkButton>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButtonWithDesc: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <>
      <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
        <Button icon={<Icon name="add" isPresentational />} aria-describedby="blah" hasHiddenLabel>
          (TESTING) Add label
        </Button>
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
      <Button icon={<Icon name="add" isPresentational />} hasHiddenLabel>
        Add something
      </Button>
      <Tooltip {...args}>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button isDisabled>Button</Button>
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

      <TabPanel className="p-24 font-family-paragraph">Tab content</TabPanel>
    </Tabs>
  ),
}

export const Placement: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button>Button</Button>
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
      <Button>Button</Button>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    reverseColors: true,
  },
}
