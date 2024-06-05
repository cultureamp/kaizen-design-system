import React, { useRef } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AriaButtonOptions, useButton } from "react-aria"
import {
  ButtonContext,
  Button as RACButton,
  useContextProps,
} from "react-aria-components"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  args: {},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

// @note - Not working
export const PlaygroundRACHooks: Story = {
  render: args => {
    const ref = useRef(null)
    const [contextProps, contextRef] = useContextProps(
      {
        type: "button",
        onPress: () => undefined,
        onFocus: () => undefined,
      } satisfies AriaButtonOptions<"button">,
      ref,
      ButtonContext
    )
    const { buttonProps } = useButton(contextProps, contextRef)

    return (
      <TooltipTrigger>
        {/* eslint-disable-next-line react/button-has-type */}
        <button ref={contextRef} {...contextProps} {...buttonProps}>
          RAC useButton
        </button>
        <Tooltip {...args}>Tooltip content</Tooltip>
      </TooltipTrigger>
    )
  },
}

export const PlaygroundRACButton: Story = {
  render: args => (
    <TooltipTrigger>
      <RACButton>RAC button</RACButton>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
  },
}

export const OnCustomButton: Story = {
  render: args => (
    <TooltipTrigger>
      <Button
        label="Some very long button label to show tooltip in center"
        component={(props): React.ReactElement => (
          <span {...props} style={{ paddingLeft: "1.5rem" }}>
            <strong>I&apos;m custom</strong>
            {props.children}
          </span>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: args => (
    <TooltipTrigger>
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
    <TooltipTrigger>
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
    <TooltipTrigger>
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
    <TooltipTrigger>
      <IconButton
        label="(TESTING) Add label"
        icon={<AddIcon role="presentation" />}
        primary
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}
