import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { Text } from '~components/Text'
import { Tab, TabList, TabPanel, Tabs, type Key } from '../index'

const meta = {
  title: 'Components/Tabs/Tabs tests',
  parameters: {
    controls: { disable: true },
  },
  args: {
    children: (
      <>
        <TabList aria-label="Tabs" data-testid="sb-arrows">
          <Tab id="one">Tab 1</Tab>
          <Tab id="two">Tab 2</Tab>
          <Tab id="three" badge="3">
            Tab 3
          </Tab>
          <Tab id="disabled" isDisabled>
            Disabled Tab
          </Tab>
          <Tab id="four">Tab 4</Tab>
          <Tab id="five">Tab 5</Tab>
        </TabList>
        <TabPanel id="one" className="p-24">
          <Text variant="body">Content 1</Text>
        </TabPanel>
        <TabPanel id="two" className="p-24">
          <Text variant="body">Content 2</Text>
        </TabPanel>
        <TabPanel id="three" className="p-24">
          <Text variant="body">Content 3</Text>
        </TabPanel>
        <TabPanel id="disabled" className="p-24">
          <Text variant="body">Disabled content</Text>
        </TabPanel>
        <TabPanel id="four" className="p-24">
          <Text variant="body">Content 4</Text>
        </TabPanel>
        <TabPanel id="five" className="p-24">
          <Text variant="body">Content 5</Text>
        </TabPanel>
      </>
    ),
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const ArrowsShowingAndHiding: Story = {
  render: (args) => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <Tabs {...args} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)

    expect(canvas.queryByTestId('kz-tablist-left-arrow')).not.toBeInTheDocument()

    const rightArrow = await canvas.findByTestId('sb-arrows-kz-tablist-right-arrow')

    await userEvent.click(rightArrow)
    await new Promise((r) => setTimeout(r, 500))

    const leftArrow = await canvas.findByTestId('sb-arrows-kz-tablist-left-arrow')

    expect(leftArrow).toBeInTheDocument()
    expect(rightArrow).toBeInTheDocument()

    await userEvent.click(rightArrow)
    await new Promise((r) => setTimeout(r, 500))

    expect(leftArrow).toBeInTheDocument()
    expect(rightArrow).not.toBeInTheDocument()
  },
}

export const ArrowsShowingAndHidingRTL: Story = {
  name: 'Arrows Showing and Hiding (RTL)',
  parameters: {
    textDirection: 'rtl',
  },
  render: (args) => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <Tabs {...args} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)

    expect(canvas.queryByTestId('kz-tablist-right-arrow')).not.toBeInTheDocument()

    const leftArrow = await canvas.findByTestId('sb-arrows-kz-tablist-left-arrow')

    await userEvent.click(leftArrow)
    await new Promise((r) => setTimeout(r, 500))

    const rightArrow = await canvas.findByTestId('sb-arrows-kz-tablist-right-arrow')

    expect(leftArrow).toBeInTheDocument()
    expect(rightArrow).toBeInTheDocument()

    await userEvent.click(leftArrow)
    await new Promise((r) => setTimeout(r, 500))

    expect(rightArrow).toBeInTheDocument()
    expect(leftArrow).not.toBeInTheDocument()
  },
}

let scrollIntoViewCalls = 0
const originalScrollIntoView = HTMLElement.prototype.scrollIntoView

/**
 * The selected tab must NOT be scrolled into view on mount (KZN-3363) — only when
 * the selection changes via user interaction. This protects users who render Tabs
 * below the fold from having the page jump on load.
 */
export const ScrollsIntoViewOnSelectionOnly: Story = {
  name: 'Scrolls into view on selection only',
  beforeEach: () => {
    scrollIntoViewCalls = 0
    HTMLElement.prototype.scrollIntoView = function (): void {
      scrollIntoViewCalls += 1
    }
    return () => {
      HTMLElement.prototype.scrollIntoView = originalScrollIntoView
    }
  },
  render: (args) => (
    <div style={{ maxWidth: '500px' }}>
      <Tabs defaultSelectedKey="one" {...args} />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)

    await step('No scroll into view on mount', async () => {
      expect(scrollIntoViewCalls).toBe(0)
    })

    await step('Scrolls into view when a tab is selected', async () => {
      const tabFour = await canvas.findByRole('tab', { name: 'Tab 4' })
      await userEvent.click(tabFour)
      await waitFor(() => expect(scrollIntoViewCalls).toBeGreaterThan(0))
    })
  },
}

export const AsyncLoaded: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<Key>(0)

    const [showSecondTab, setShowSecondTab] = React.useState(false)
    React.useEffect(() => {
      const timer = setTimeout(() => setShowSecondTab(true), 1000)
      return () => clearTimeout(timer)
    }, [])
    return (
      <div style={{ maxWidth: '300px' }}>
        <Tabs selectedKey={selectedKey} onSelectionChange={setSelectedKey}>
          <TabList aria-label="Tabs" data-testid="sb-arrows">
            <Tab id="one">Conversation</Tab>
            {showSecondTab && <Tab id="two">Personal notes</Tab>}
          </TabList>
          <TabPanel id="one" className="p-24">
            <Text variant="body">Content 1</Text>
          </TabPanel>
          <TabPanel id="two" className="p-24">
            <Text variant="body">Content 2</Text>
          </TabPanel>
        </Tabs>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    expect(canvas.queryByTestId('kz-tablist-right-arrow')).not.toBeInTheDocument()
    await waitFor(() => userEvent.click(canvasElement))
    await new Promise((r) => setTimeout(r, 2000))

    await step('Check if second tab is loaded', async () => {
      await waitFor(() => {
        expect(canvas.queryByText('Personal notes')).toBeInTheDocument()
      })

      await waitFor(async () => {
        const rightTab = await canvas.findByTestId('sb-arrows-kz-tablist-right-arrow')
        expect(rightTab).toBeInTheDocument()
      })
    })
  },
}
