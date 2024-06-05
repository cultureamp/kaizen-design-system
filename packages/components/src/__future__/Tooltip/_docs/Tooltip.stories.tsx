import React, { useRef } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AriaButtonOptions, useButton } from "react-aria"
import { ButtonContext, Button as RACButton, useContextProps } from "react-aria-components"
import { Button } from "~components/Button"
import { InformationIcon } from "~components/Icon"
import { Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  args: {},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
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
      <button ref={contextRef} {...contextProps} {...buttonProps}>RAC useButton</button>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  )
},
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
  },
}

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
      <button ref={contextRef} {...contextProps} {...buttonProps}>RAC useButton</button>
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

export const PlaygroundCustomButton: Story = {
  render: args => (
    <TooltipTrigger>
      <Button
        label="button labelfdsofjbnsdpoufndslkjfgnspdfkojgnsúdfkojgn"
        component={(props): React.ReactElement => (
          <div {...props}>
            <div>I&apos;m custom</div>
            <div>{props.children}</div>
          </div>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const PlaygroundButton: Story = {
  render: args => (
    <TooltipTrigger>
      <Button
        label="button labelfdsofjbnsdpoufndslkjfgnspdfkojgnsúdfkojgn"
        // disabled
        aria-disabled
      />
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div><strong>Title here maybe</strong></div>
        <div>Tooltip content</div>
        </Tooltip>
    </TooltipTrigger>
  ),
}

export const PlaygroundLink: Story = {
  render: args => (
    <TooltipTrigger>
      <Button
        label="button labelfdsofjbnsdpoufndslkjfgnspdfkojgnsúdfkojgn"
        href="#"
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}
