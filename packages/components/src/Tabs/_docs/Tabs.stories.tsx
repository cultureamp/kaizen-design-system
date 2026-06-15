import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Text } from '~components/Text'
import { Tab, TabList, TabPanel, Tabs, type Key } from '../index'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    children: (
      <>
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
          <Text variant="body">Content 4</Text>
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

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: {
    defaultSelectedKey: 'one',

    onSelectionChange: (key): void => console.log('Tab changed to ', key),
  },
}

export const Controlled: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<Key>(0)
    return (
      <>
        <Tabs selectedKey={selectedKey} onSelectionChange={setSelectedKey}>
          <TabList aria-label="Tabs">
            <Tab id="one">Tab 1</Tab>
            <Tab id="two">Tab 2</Tab>
          </TabList>
          <TabPanel id="one" className="p-24">
            <Text variant="body">Content 1</Text>
          </TabPanel>
          <TabPanel id="two" className="p-24">
            <Text variant="body">Content 2</Text>
          </TabPanel>
        </Tabs>
        <Button onClick={(): void => setSelectedKey('two')}>Switch to tab 2</Button>
      </>
    )
  },
}

/**
 * When a tab is selected via user interaction, `TabList` scrolls the selected tab
 * into view within its horizontal strip. It deliberately does *not* do this on
 * mount — so when `Tabs` render below the fold, landing on the page does not scroll
 * the tabs into view or jump the page.
 *
 * This story pushes the `Tabs` below the fold with a full-viewport spacer. On load
 * the page stays at the top. Scroll down and select a tab — only then does the
 * selected tab scroll into view within the strip.
 */
export const BelowTheFold: Story = {
  render: () => (
    <div style={{ maxWidth: '760px' }}>
      <div style={{ height: '100dvh' }}>
        <Text variant="body">Scroll down — the tabs are rendered below the fold.</Text>
      </div>
      <Tabs defaultSelectedKey="tab-0">
        <TabList aria-label="Lorem ipsum tabs">
          {Array.from({ length: 8 }, (_, i) => (
            <Tab key={i} id={`tab-${i}`}>
              Lorem {i + 1}
            </Tab>
          ))}
        </TabList>
        {Array.from({ length: 8 }, (_, i) => (
          <TabPanel key={i} id={`tab-${i}`} className="p-24">
            <Text variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit — panel {i + 1}.
            </Text>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  ),
}
