import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within } from "@storybook/test"
import isChromatic from "chromatic"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "~components/Tabs"
import { Text } from "~components/Text"
import { Tag } from "~components/__future__/Tag"
import { Focusable } from "~components/__utilities__/v3"
import { ToggleTip, Tooltip, TooltipTrigger } from "./index"

const meta = {
  title: "Overlays/Tooltip/v3",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    defaultOpen: isChromatic(),
  },
  argTypes: {
    // eslint-disable-next-line camelcase
    UNSTABLE_portalContainer: {
      control: false,
      table: { disable: true },
    },
    triggerRef: { control: false },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultOpen: _, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.queryByRole("button") || canvas.getByRole("link")

    await step("Hover shows", async () => {
      await userEvent.unhover(button)
      await userEvent.hover(button)
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible())
      expect(button).toHaveAttribute(
        "aria-describedby",
        canvas.getByRole("tooltip").id
      )
      await userEvent.unhover(button)
    })

    await step("Focus shows", async () => {
      await userEvent.tab() // focus
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible())
      await userEvent.tab() // unfocus
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull())
    })

    await step("Escape closes", async () => {
      await userEvent.tab() // focus
      await userEvent.keyboard("{Escape}")
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull())
      await userEvent.tab() // unfocus
    })
  },
}

export const OnLink: Story = {
  ...OnButton,
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" href="#" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButtonWithDesc: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <>
      <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
        <IconButton
          label="(TESTING) Add label"
          icon={<AddIcon role="presentation" />}
          primary
          aria-describedby="blah"
        />
        <Tooltip {...args}>Tooltip content</Tooltip>
      </TooltipTrigger>
      <Text variant="body" id="blah">
        This is target of aria-describedby
      </Text>
    </>
  ),
}

export const OnIconButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <IconButton
        label="Add something"
        icon={<AddIcon role="presentation" />}
        primary
        // Negate the aria description (added by RAC) as it should be the
        // same as the accessible name, therefore no need to duplicate it
        aria-describedby={null}
      />
      <Tooltip {...args}>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" disabled />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButtonAnchor: Story = {
  name: "On Button with custom <a>",
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button
        label="Button"
        component={props => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a {...props} href="#" style={{ padding: "0 1rem" }}>
            Custom Link
          </a>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButton: Story = {
  ...OnButton,
  name: "On Button with custom <button>",
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button
        label="Button"
        component={props => <button type="button" {...props} />}
      />
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
        <Tab>Tab 2</Tab>
        <Tab badge="3">Tab 3</Tab>
        <Tab disabled>Disabled Tab</Tab>
      </TabList>
      <TabPanels>
        <TabPanel classNameOverride="p-24 font-family-paragraph">
          Content 1
        </TabPanel>
        <TabPanel classNameOverride="p-24 font-family-paragraph">
          Content 2
        </TabPanel>
        <TabPanel classNameOverride="p-24 font-family-paragraph">
          Content 3
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
}

export const Placement: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args} placement="top" shouldFlip={false}>
        Placement top
      </Tooltip>
      <Tooltip {...args} placement="right" shouldFlip={false}>
        Placement right
      </Tooltip>
      <Tooltip {...args} placement="bottom" shouldFlip={false}>
        Placement bottom
      </Tooltip>
      <Tooltip {...args} placement="left" shouldFlip={false}>
        Placement left
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const ReversedColors: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    reverseColors: true,
  },
}

export const ToggleTipStory: Story = {
  name: "ToggleTip",
  args: { defaultOpen: false },
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <ToggleTip>
        <InformationIcon role="img" aria-label="Information" />
      </ToggleTip>
      <Tooltip
        {...args}
        style={{ display: "flex", textAlign: "left", alignItems: "center" }}
      >
        <InformationIcon
          role="presentation"
          style={{ marginRight: "0.25rem" }}
        />
        With rich content
      </Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    // focus
    await userEvent.tab()
    await expect(canvas.queryByRole("tooltip")).toBeNull()

    await step("Enter toggles", async () => {
      await userEvent.keyboard("{enter}")
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible())
      await userEvent.keyboard("{enter}")
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull())
    })
    await step("Space toggles", async () => {
      await userEvent.keyboard(" ")
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible())
      await userEvent.keyboard(" ")
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull())
    })
    await step("Pointer toggles", async () => {
      const button = canvasElement.getElementsByTagName("button")[0]
      await userEvent.click(button)
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible())
      await userEvent.click(button)
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull())
    })
    await step("Escape closes", async () => {
      await userEvent.keyboard("{enter}")
      await userEvent.keyboard("{Escape}")
      await waitFor(() => expect(canvas.queryByRole("tooltip")).toBeNull())
    })

    // leave open for screenshot
    await userEvent.keyboard("{enter}")
  },
}
