import React, { useState } from "react"
import { Box, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { Button } from "@kaizen/draft-button"
import { CATEGORIES } from "../../../storybook/constants"
import { Tabs, TabList, TabPanels, TabPanel, Tab } from "../index"

export default {
  title: `${CATEGORIES.components}/Tabs`,
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

export const Uncontrolled = () => (
  <Tabs
    defaultIndex={1}
    // eslint-disable-next-line no-console
    onChange={index => console.log("Tab changed to ", index)}
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

export const Controlled = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <>
      <Tabs
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)}
      >
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

      <Button label="Switch to tab 2" onClick={() => setSelectedIndex(1)} />
    </>
  )
}

export const ManualKeyboardActivation = () => (
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

export const UsageInCard = () => (
  <Card>
    <Tabs
      // eslint-disable-next-line no-console
      onChange={index => console.log("Tab changed to ", index)}
    >
      <Box pt={0.25}>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab disabled>Disabled Tab</Tab>
        </TabList>
      </Box>

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
