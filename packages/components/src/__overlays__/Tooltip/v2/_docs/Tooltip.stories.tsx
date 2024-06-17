import React from "react"

import { Meta, StoryObj } from "@storybook/react"
<<<<<<< HEAD
import { expect, userEvent, waitFor, within } from "@storybook/test"
import isChromatic from "chromatic"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "~components/Tabs"
import { Tag } from "~components/__future__/Tag"
import { Focusable, ToggleTip, Tooltip, TooltipTrigger } from "../index"
=======
import * as TooltipV1Stories from "../../v1/_docs/Tooltip.stories"
import { Tooltip } from "../index"
>>>>>>> 1ef639f45 (add Tooltip v1, alias in v2 and move poc to v3)

const meta = {
  title: "Overlays/Tooltip/v2",
  component: Tooltip,
  args: {
    text: "Example tooltip text.",
  },
  decorators: [
    Story => (
      <div className="flex mt-[60px] gap-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
<<<<<<< HEAD
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
=======
>>>>>>> 1ef639f45 (add Tooltip v1, alias in v2 and move poc to v3)
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

<<<<<<< HEAD
export const OnButton: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button with tooltip" />
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
      <Button label="Button with tooltip" href="#" />
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
      <div id="blah">Custom description</div>
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
      <Button label="Button with tooltip" disabled />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButtonAnchor: Story = {
  name: "On Button with custom <a>",
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button
        label="Button with tooltip"
        component={props => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a {...props} href="#" style={{ padding: "0 1rem" }}>
            Custom Link with tooltip
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
        label="Button with tooltip"
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

export const PlacementLeft: Story = {
  ...OnButton,
  args: { placement: "left" },
}

export const PlacementRight: Story = {
  ...OnButton,
  args: { placement: "right" },
}

export const PlacementTop: Story = {
  ...OnButton,
  args: { placement: "top" },
}

export const PlacementBottom: Story = {
  ...OnButton,
  args: { placement: "bottom" },
}

export const ReversedColors: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Button label="Button with tooltip" reversed={true} />
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
=======
export const Playground: Story = TooltipV1Stories.Playground

export const OverflowScroll: Story = TooltipV1Stories.OverflowScroll

export const ButtonsWithTooltip: Story = TooltipV1Stories.ButtonsWithTooltip

export const ButtonGroupWithTooltip: Story = TooltipV1Stories.ButtonsWithTooltip

export const TableHeadersWithTooltips: Story =
  TooltipV1Stories.TableHeadersWithTooltips

export const TagWithHoverOnlyTooltip: Story =
  TooltipV1Stories.TagWithHoverOnlyTooltip

export const TagWithTooltip: Story = TooltipV1Stories.TagWithTooltip

export const TagWithCheckboxField: Story = TooltipV1Stories.TagWithCheckboxField

export const CheckboxFieldTooltip: Story = TooltipV1Stories.CheckboxFieldTooltip

export const CheckboxFieldWithDescriptionTooltip: Story =
  TooltipV1Stories.CheckboxFieldWithDescriptionTooltip
>>>>>>> 1ef639f45 (add Tooltip v1, alias in v2 and move poc to v3)
