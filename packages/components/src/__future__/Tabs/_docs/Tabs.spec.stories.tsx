import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import { Text } from '~components/Text'
import { Tab, TabList, TabPanel, Tabs } from '../index'

const meta = {
  title: 'Components/Tabs/Tabs (Future)/Tests',
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const ArrowsShowingAndHiding: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <Tabs>
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
        </Tabs>
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
