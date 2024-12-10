import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/test'
import { Text } from '~components/Text'
import { Tab, TabList, TabPanel, Tabs } from '../index'

const meta = {
  title: 'Components/Tabs/Tabs (Future)/ Tabs (Future) (Tests)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const OverflowCarousel: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <Tabs>
          <TabList aria-label="Tabs">
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

    const rightArrow = await canvas.findByTestId('kz-tablist-right-arrow')

    await userEvent.click(rightArrow)
    await new Promise((r) => setTimeout(r, 200))

    await userEvent.click(rightArrow)
    await new Promise((r) => setTimeout(r, 200))

    const leftArrow = await canvas.findByTestId('kz-tablist-left-arrow')
    await userEvent.click(leftArrow)
    await new Promise((r) => setTimeout(r, 200))
  },
}
