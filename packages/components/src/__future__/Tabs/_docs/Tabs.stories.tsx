import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '~components/Text'
import { Button } from '~components/__actions__/v2'
import { Tab, TabList, TabPanel, Tabs, Key } from '../index'

const meta = {
  title: 'Components/Tabs/Tabs (Future)',
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
          <Tab id="four" isDisabled>
            Disabled Tab
          </Tab>
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
    // eslint-disable-next-line no-console
    onSelectionChange: (key): void => console.log('Tab changed to ', key),
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [selectedKey, setSelectedKey] = useState<Key>(0)
    return (
      <>
        <Tabs {...args} selectedKey={selectedKey} onSelectionChange={setSelectedKey} />
        <Button label="Switch to tab 2" onClick={(): void => setSelectedKey('two')} />
      </>
    )
  },
}
