import React, { useState } from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { Paragraph } from "@kaizen/typography"
import { Tabs, TabList, TabPanels, TabPanel, Tab } from "../index"

export default {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { Tab, TabList, TabPanels, TabPanel },
  parameters: {
    docs: {
      description: {
        component:
          'import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@kaizen/tabs"',
      },
    },
  },
}

export const Uncontrolled: StoryFn = () => (
  <Tabs
    defaultIndex={1}
    // eslint-disable-next-line no-console
    onChange={(index): void => console.log("Tab changed to ", index)}
  >
    <TabList aria-label="Tabs">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab badge="3">Tab 3</Tab>
      <Tab disabled>Disabled Tab</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Box p={1}>
          <Paragraph variant="body">Content 1</Paragraph>
        </Box>
      </TabPanel>
      <TabPanel>
        <Box p={1}>
          <Paragraph variant="body">
            Uncontrolled is where you (optionally) specify a default selected
            tab, but the state is otherwise uncontrolled from the consuming end
            and controlled under the hood instead.
          </Paragraph>
        </Box>
      </TabPanel>
      <TabPanel>
        <Box p={1}>
          <Paragraph variant="body">Content 3</Paragraph>
        </Box>
      </TabPanel>
    </TabPanels>
  </Tabs>
)
Uncontrolled.parameters = { chromatic: { disable: false } }

export const Controlled: StoryFn = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <>
      <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box p={1}>
              <Paragraph variant="body">
                Controlled is where the selected tab state is held at the
                consuming level and passed into the component. This allows you
                to change the tab by some other means, such as this button.
              </Paragraph>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={1}>
              <Paragraph variant="body">Content 2</Paragraph>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={1}>
              <Paragraph variant="body">Content 3</Paragraph>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Button
        label="Switch to tab 2"
        onClick={(): void => setSelectedIndex(1)}
      />
    </>
  )
}

export const ManualKeyboardActivation: StoryFn = () => (
  <Tabs keyboardActivation="manual">
    <TabList aria-label="Tabs">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Box p={1}>
          <Box mb={0.5}>
            <Paragraph variant="body">
              When using arrow keys to navigate these tabs, the tab will only be
              focused (rather than automatically made active). You'll need to
              press enter/space to then active the tab.
            </Paragraph>
          </Box>
          <Paragraph variant="body">
            This is designed for usages where changing tab is an expensive
            operation.
          </Paragraph>
        </Box>
      </TabPanel>
      <TabPanel>
        <Box p={1}>
          <Paragraph variant="body">Content 2</Paragraph>
        </Box>
      </TabPanel>
      <TabPanel>
        <Box p={1}>
          <Paragraph variant="body">Content 3</Paragraph>
        </Box>
      </TabPanel>
    </TabPanels>
  </Tabs>
)

export const UsageInCard: StoryFn = () => (
  <Card>
    <Tabs
      // eslint-disable-next-line no-console
      onChange={(index): void => console.log("Tab changed to ", index)}
    >
      <TabList aria-label="Tabs">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab disabled>Disabled Tab</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="body">Content 1</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="body">Content 2</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="body">Content 3</Paragraph>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Card>
)
UsageInCard.parameters = {
  backgrounds: { default: "Gray 100" },
}
