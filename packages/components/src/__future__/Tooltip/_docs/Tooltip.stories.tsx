import React, { forwardRef, useRef } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { Button, IconButton } from "~components/Button"
import { AddIcon, CommentIcon, FeedbackShareIcon, InformationIcon } from "~components/Icon"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "~components/Tabs"
import { Tag } from "~components/__future__/Tag"
import {
  Focusable,
  ToggleTipTrigger,
  Tooltip,
  TooltipRef,
  TooltipTrigger,
} from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    // defaultOpen: true,
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

export const OnButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <TooltipRef.Interactive>
        <Button
          label="Button with tooltip"
          // eslint-disable-next-line no-console
          onClick={e => console.log("Click!", e)}
          // eslint-disable-next-line no-console
          onFocus={e => console.log("Focus!!!", e)}
        />
      </TooltipRef.Interactive>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnLink: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <TooltipRef.Interactive>
        <Button label="Button with tooltip" href="#" />
      </TooltipRef.Interactive>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButtonWithDesc: Story = {
  render: args => (
    <>
      <TooltipTrigger>
        <TooltipRef.Interactive>
          <IconButton
            label="(TESTING) Add label"
            icon={<AddIcon role="presentation" />}
            primary
            aria-describedby="blah"
          />
        </TooltipRef.Interactive>
        <Tooltip {...args}>Tooltip content</Tooltip>
      </TooltipTrigger>
      <div id="blah">Custom description</div>
    </>
  ),
}

// NOT WORKING
// Appears that there is an incompability between the libraries as they both manipulate children
// - Tab expects children to only be a rendered element, and it wraps it with a button with attributes
// - Tooltip expects to wrap its children, then ties the trigger and content together
export const OnTabs: Story = {
  render: () => (
    <Tabs>
      <TabList aria-label="Tabs">
        <Tab>
          <Tooltip>
            <FeedbackShareIcon role="img" aria-label="Feedback" />
            <Tooltip>Feedback</Tooltip>
          </Tooltip>
        </Tab>
        <Tab>
          <Tooltip>
            {/* @todo: nullify desc */}
            <TooltipRef.Interactive>
              <CommentIcon role="img" aria-label="Comments" />
            </TooltipRef.Interactive>
            <Tooltip>Comments</Tooltip>
          </Tooltip>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel classNameOverride="p-24">
          Content 1
        </TabPanel>
        <TabPanel classNameOverride="p-24">
          Content 2
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
}

// @note:
// - a11y not considered; don't use this!
// @todo: try a library and hope it's compatible
export const CustomTabs: Story = {
  render: args => {
    const [activeTab, setActiveTab] = React.useState("tab-1")
    return (
      <div>
        <div>
          <TooltipTrigger>
            <TooltipRef.Interactive>
              <button type="button"
              className={activeTab === "tab-1" ? "bg-blue-300" : undefined}
              onClick={() => setActiveTab("tab-1")}
              >Tab 1</button>
            </TooltipRef.Interactive>
            <Tooltip>Tab 1</Tooltip>
          </TooltipTrigger>
          <TooltipTrigger>
            <TooltipRef.Interactive>
              <button type="button"
              className={activeTab === "tab-2" ? "bg-blue-300" : undefined}
              onClick={() => setActiveTab("tab-2")}
              >Tab 2</button>
            </TooltipRef.Interactive>
            <Tooltip>Tab 2</Tooltip>
          </TooltipTrigger>
        </div>
        <div>
          {activeTab === "tab-1" && <>Tab 1</>}
          {activeTab === "tab-2" && <>Tab 2</>}
        </div>
      </div>
    )
  }
}

export const OnIconButton: Story = {
  render: args => (
    <TooltipTrigger>
      <TooltipRef.Interactive>
        <IconButton
          label="Add something"
          icon={<AddIcon role="presentation" />}
          primary
          // Negate the aria description (added by RAC) as it should be the
          // same as the accessible name, therefore no need to duplicate it
          aria-describedby={null}
        />
      </TooltipRef.Interactive>
      <Tooltip {...args}>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Button with tooltip" disabled />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButtonAnchor: Story = {
  name: "On Button with custom <a>",
  render: args => (
    <TooltipTrigger {...args}>
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

// @note:
// - Unfortunately the composition of Button's `component`, we cannot
// pass through the ref; maybe once we are all on R19 and `ref` is a prop
// - For the meantime, as long as we wrap the component, the Tooltip can work fine
export const OnCustomButton: Story = {
  name: "On Button with custom <button>",
  render: args => (
    <TooltipTrigger>
      <TooltipRef.Interactive childDoesNotHaveRef>
        <Button
          label="Custom component - no ref"
          component={props => <button type="button" {...props} />}
          />
      </TooltipRef.Interactive>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomFocusableElement: Story = {
  render: args => (
    <TooltipTrigger>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const TestingTooltipWrappers: Story = {
  render: args => (
    <>
    <div>
    <TooltipTrigger>
      <TooltipRef.Interactive>
        <Button label="Interactive" />
      </TooltipRef.Interactive>
      <Tooltip>Tooltip content</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <TooltipRef.NonInteractive>
        <Tag.WithRef>Non-interactive element with ref</Tag.WithRef>
      </TooltipRef.NonInteractive>
      <Tooltip>Tooltip content</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      {/* @note: Prop is a workaround for children that do not accept a ref */}
      <TooltipRef.NonInteractive childDoesNotHaveRef>
        <Tag>Non-interactive element without ref</Tag>
      </TooltipRef.NonInteractive>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
    </div>

    <div className="mt-48">
      <div>button element</div>
      <TooltipTrigger>
      <TooltipRef.Interactive>
        <button type="button">Custom button</button>
      </TooltipRef.Interactive>
      <Tooltip>Customised button</Tooltip>
    </TooltipTrigger>
    </div>
    </>
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
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Button with tooltip" reversed={true} />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    reverseColors: true,
  },
}

export const ToggleTip: Story = {
  args: { defaultOpen: false },
  render: args => (
    <TooltipTrigger {...args}>
      <ToggleTipTrigger>
        <InformationIcon role="img" aria-label="Information" />
      </ToggleTipTrigger>
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
      await expect(canvas.getByRole("tooltip")).toBeVisible()
      await userEvent.keyboard("{enter}")
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })
    await step("Space toggles", async () => {
      await userEvent.keyboard(" ")
      await expect(canvas.getByRole("tooltip")).toBeVisible()
      await userEvent.keyboard(" ")
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })
    await step("Pointer toggles", async () => {
      const button = canvasElement.getElementsByTagName("button")[0]
      await userEvent.click(button)
      await expect(canvas.getByRole("tooltip")).toBeVisible()
      await userEvent.click(button)
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })
    await step("Escape closes", async () => {
      await userEvent.keyboard("{enter}")
      await userEvent.keyboard("{Escape}")
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })

    // leave open for screenshot
    await userEvent.keyboard("{enter}")
  },
}
