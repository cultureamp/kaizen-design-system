import React, { useRef, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AriaButtonOptions, useButton } from "react-aria"
import {
  ButtonContext,
  Button as RACButton,
  useContextProps,
} from "react-aria-components"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tag } from "~components/__future__/Tag"
import { Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  args: {},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

const Trigger = () => {
  const ref = useRef(null)
  // const [contextProps, contextRef] = useContextProps(
  //   {
  //     // type: "button",
  //     // onPress: () => undefined,
  //     // onFocus: () => undefined,
  //   } satisfies AriaButtonOptions<"button">,
  //   ref,
  //   ButtonContext
  // )
  // const { buttonProps } = useButton(contextProps, contextRef)
  const { buttonProps } = useButton({}, ref)

  // return <button ref={contextRef} {...contextProps} {...buttonProps}>RAC useButton</button>
  return <button ref={ref} {...buttonProps}>RAC useButton</button>
}

export const PlaygroundRACHooks: Story = {
  render: args => (
    <TooltipTrigger>
      <Trigger />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
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

const WrapperNotInteractive = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [contextProps, contextRef] = useContextProps(
    {},
    ref,
    ButtonContext
  )
  const { buttonProps } = useButton({...contextProps, elementType: "div" }, contextRef)
  // const { buttonProps } = useButton({ elementType: "div" }, ref)
  // const { buttonProps } = useButton({}, ref)

  return (
    // <div ref={contextRef} {...contextProps} {...buttonProps}>
    <div ref={ref} {...buttonProps}>
      <Tag>Non-interactive element</Tag>
    </div>
)
}

export const PlaygroundTag: Story = {
  render: args =>
    // const ref = useRef<HTMLDivElement>(null)
    // const [contextProps, contextRef] = useContextProps(
    //   {},
    //   ref,
    //   ButtonContext
    // )
    // const { buttonProps } = useButton({...contextProps, elementType: "div" }, contextRef)
    // const { buttonProps } = useButton({ elementType: "div" }, ref)
    // const { buttonProps } = useButton({}, ref)

     (
    <TooltipTrigger>
      {/* <div ref={ref} {...buttonProps}> */}
      {/* <div ref={contextRef} {...contextProps} {...buttonProps}>
        <Tag>Non-interactive element</Tag>
      </div> */}
      <WrapperNotInteractive/>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  )
,
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
  },
}
