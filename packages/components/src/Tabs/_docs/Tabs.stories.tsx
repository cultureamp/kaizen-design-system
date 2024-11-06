import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card } from "~components/Card"
import { Text } from "~components/Text"
import { Button } from "~components/__actions__/v2"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../index"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  args: {
    children: (
      <>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab badge="3">Tab 3</Tab>
          <Tab disabled>Disabled Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 1</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 2</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 3</Text>
          </TabPanel>
        </TabPanels>
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
        sourceState: "shown",
      },
    },
  },
  args: {
    defaultIndex: 1,
    onChange: (index): void => console.log("Tab changed to ", index),
  },
}

export const Controlled: Story = {
  render: args => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    return (
      <>
        <Tabs
          {...args}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        />
        <Button
          label="Switch to tab 2"
          onClick={(): void => setSelectedIndex(1)}
        />
      </>
    )
  },
}

export const UsageInCard: Story = {
  parameters: {
    backgrounds: { default: "Gray 100" },
  },
  render: args => (
    <Card>
      <Tabs {...args} />
    </Card>
  ),
}
