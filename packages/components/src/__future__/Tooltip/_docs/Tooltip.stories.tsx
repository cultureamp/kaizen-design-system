import React, { ReactNode, useEffect, useRef, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AriaButtonOptions, VisuallyHidden, useButton } from "react-aria"
import {
  ButtonContext,
  Button as RACButton,
  TooltipContext,
  TooltipTriggerStateContext,
  useContextProps,
  useSlottedContext,
} from "react-aria-components"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tag } from "~components/__future__/Tag"
import { NonInteractiveTooltip } from "../NonInteractiveTooltip"
import { NonInteractiveTrigger, Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  args: {},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

// const NonInteractiveTrigger = ({ children }: { children: ReactNode }) => {
//   const ref = useRef(null)
//   // const [contextProps, contextRef] = useContextProps(
//   //   {
//   //     // type: "button",
//   //     // onPress: () => undefined,
//   //     // onFocus: () => undefined,
//   //   } satisfies AriaButtonOptions<"button">,
//   //   ref,
//   //   ButtonContext
//   // )
//   // const { buttonProps } = useButton(contextProps, contextRef)
//   const { buttonProps } = useButton({}, ref)

//   // return <button ref={contextRef} {...contextProps} {...buttonProps}>RAC useButton</button>
//   return (
//     <button ref={ref} {...buttonProps}>
//       RAC useButton
//     </button>
//   )
// }

// export const PlaygroundRACHooks: Story = {
//   render: args => (
//     <TooltipTrigger>
//       <Trigger />
//       <Tooltip {...args}>Tooltip content</Tooltip>
//     </TooltipTrigger>
//   ),
// }

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

export const PlaygroundTag: Story = {
  render: args => (
    <TooltipTrigger>
      <NonInteractiveTooltip>this is text</NonInteractiveTooltip>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

const WrapperNotInteractiveV1 = ({ children }: { children: ReactNode }): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [contextProps] = useContextProps({}, ref, TooltipContext)
  const { buttonProps } = useButton({ elementType: "div" }, ref)
  const [tooltipContent, setTooltipContent] = useState<string | null>()

  // This doesn't work as we cannot get the tooltip content until the tooltip has appeared
  useEffect(() => {
    if (!tooltipContent && contextProps.id) {
      setTooltipContent(document.getElementById(contextProps.id)?.textContent)
    }
  }, [contextProps])

  return (
    <div ref={ref} {...buttonProps} style={{ display: "inline-block" }}>
      {children}
        {tooltipContent}
      <VisuallyHidden>
        {tooltipContent}
      </VisuallyHidden>
    </div>
  )
}

export const PlaygroundNonInteractiveTrigger: Story = {
  render: args => {
    const TooltipContent = (): JSX.Element => <>
    <InformationIcon role="presentation" />
    <div>
      <strong>Title here maybe</strong>
    </div>
    <div>Tooltip content</div>
    </>

    return (
    <TooltipTrigger>
      <NonInteractiveTrigger>
        <Tag>Non-interactive element</Tag>
      </NonInteractiveTrigger>
      <Tooltip {...args}><TooltipContent /></Tooltip>
    </TooltipTrigger>
  )
},
}
