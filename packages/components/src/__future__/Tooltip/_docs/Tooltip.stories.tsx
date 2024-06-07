import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/test"
import { DialogTrigger, Button as RACButton } from "react-aria-components"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tag } from "~components/__future__/Tag"
import {
  Focusable,
  Popover,
  PopoverTrigger,
  ToggleTipTrigger,
  Tooltip,
  TooltipTrigger,
} from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  parameters: {
    layout: "centered",
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

export const PlaygroundRACButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <RACButton>RAC button</RACButton>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
  },
}

// Note:
// - Keyboard focus appears not to work
export const OnCustomButtonSpan: Story = {
  name: "Button custom <span>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        component={props => <span {...props} tabIndex={0} />}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButtonAnchor: Story = {
  name: "Button custom <a>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        component={props => <a {...props} href="#" />}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButton: Story = {
  name: "Button custom <button>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        component={props => <button type="button" {...props} />}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        disabled
      />
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Some very long button label to show tooltip in center" />
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const OnLink: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        href="#"
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnIconButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <IconButton
        label="(TESTING) Add label"
        icon={<AddIcon role="presentation" />}
        primary
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const PlacementLeft: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "left" },
}

export const PlacementRight: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "right" },
}

export const PlacementTop: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "top" },
}

export const PlacementBottom: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "bottom" },
}

export const WithCustomFocusableElement: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const ToggleTip: Story = {
  name: "Toggle Tip (Tooltip)",
  render: args => (
    <TooltipTrigger {...args}>
      <ToggleTipTrigger>
        <InformationIcon role="img" aria-label="Information" />
      </ToggleTipTrigger>
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement)
    await userEvent.tab()
    await userEvent.keyboard("{enter}")

    // await userEvent.type(canvas.getByTestId("email"), "email@provider.com")
    // await userEvent.type(canvas.getByTestId("password"), "a-random-password")
    // await userEvent.click(canvas.getByRole("button"))
    // notice that you don't need to write asserts here as all commonly applied asserts (snapshots, a11y, ...) are applied here as well
  },
}

// // NOT FULLY WORKING
// // - Does not close when clicking outside
// // - Does not close on Esc
// export const PlaygroundToggleTipPopover: Story = {
//   name: "Toggle Tip (Popover)",
//   render: () => (
//     <DialogTrigger>
//       <PopoverTrigger>
//         <InformationIcon role="img" aria-label="Information" />
//       </PopoverTrigger>
//       <Popover
//         // This isn't working
//         shouldCloseOnInteractOutside={() => true}
//       >
//         <InformationIcon role="presentation" />
//         <div>
//           <strong>Title here maybe</strong>
//         </div>
//         <div>Popover content</div>
//       </Popover>
//     </DialogTrigger>
//   ),
// }
