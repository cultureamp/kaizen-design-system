import React, { useRef, useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Heading } from '~components/Heading'
import { Icon } from '~components/Icon'
import { SingleSelect } from '~components/SingleSelect'
import { Text } from '~components/Text'
import { Collapsible, type CollapsibleRef } from '../index'

const meta = {
  title: 'Components/Collapsibles/Collapsible',
  component: Collapsible,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    ac scelerisque sem, vel ultricies justo. Donec eu porttitor ante,
    nec gravida orci. Nulla facilisi. Cras varius erat id fermentum
    mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra
    sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate
    magna nisl, in cursus urna hendrerit et. Aenean semper, est non
    feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque
    arcu quam a sapien. Donec in viverra urna.`,
  },
  parameters: {
    backgrounds: { default: 'Gray 100' },
  },
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    title: 'Single Collapsible',
  },
  parameters: {
    backgrounds: { default: 'Gray 100' },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const NoPadding: Story = {
  args: {
    title: 'No padding',
  },
  render: ({ title }) => (
    <Collapsible open noSectionPadding title={title}>
      <Text variant="body">In that case you should use the &apos;noSectionPadding&apos; prop.</Text>
    </Collapsible>
  ),
}

export const Clear: Story = {
  args: {
    title: 'Clear',
  },
  render: ({ title }) => (
    <Collapsible open variant="clear" title={title}>
      <Text variant="body">The header becomes clear</Text>
    </Collapsible>
  ),
}

export const CustomHeader: Story = {
  args: {
    title: 'Custom header',
  },
  render: ({ title: standardTitle }) => (
    <Collapsible
      open
      title={standardTitle}
      renderHeader={(title) => (
        <Heading variant="heading-4" tag="span">
          <span className="flex gap-8 items-center">
            <Icon name="potted_plant" isPresentational /> {title}
          </span>
        </Heading>
      )}
    >
      <Text variant="body">You can create a custom header using the renderHeader prop.</Text>
    </Collapsible>
  ),
}

const controlledSourceCode = `
const [isOpen, setIsOpen] = useState<boolean>(false)
return (<Collapsible {...args} open={isOpen} onToggle={setIsOpen} />)
`

export const Controlled: Story = {
  args: {
    title: 'Controlled',
    controlled: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return <Collapsible {...args} open={isOpen} onToggle={setIsOpen} />
  },
  parameters: { docs: { source: { code: controlledSourceCode } } },
}

export const WithProgrammaticFocus: Story = {
  args: {
    title: 'Collapsible with Programmatic Focus',
  },
  render: (args) => {
    const collapsibleRef = useRef<CollapsibleRef>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSaveAndFocus = async (): Promise<void> => {
      setIsLoading(true)
      // Simulate async operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoading(false)
      // Focus the toggle button after the async operation
      collapsibleRef.current?.focus()
    }

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={handleSaveAndFocus}
            disabled={isLoading}
            data-testid="save-button"
          >
            {isLoading ? 'Saving...' : 'Save and Focus Collapsible'}
          </button>
          <Text variant="body" style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            {isLoading
              ? 'Saving... The button will be focused after the operation completes.'
              : 'Click to simulate an async operation, then programmatically focus the collapsible toggle.'}
          </Text>
        </div>
        <Collapsible {...args} ref={collapsibleRef}>
          <Text variant="body">
            After the async operation (like a save in a sortable list), the focus is moved to the
            toggle button. This allows keyboard users to immediately interact with the collapsible
            without needing to manually navigate.
          </Text>
        </Collapsible>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates programmatically focusing the toggle button after an async operation. This is useful for sortable lists where items are saved and you want to restore focus to the toggle button.',
      },
    },
  },
}

export const WithSingleSelect: Story = {
  args: {
    title: 'Single Collapsible',
  },
  render: (args) => (
    <Collapsible {...args}>
      <Text variant="body">Content before the SingleSelect</Text>
      <SingleSelect
        label="Type"
        items={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
        ]}
      />
      <Text variant="body">
        Content after the SingleSelect — this should be reachable via VoiceOver
      </Text>
    </Collapsible>
  ),
  parameters: {
    backgrounds: { default: 'Gray 100' },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
