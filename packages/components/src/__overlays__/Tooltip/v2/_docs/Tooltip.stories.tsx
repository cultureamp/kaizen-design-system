import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import * as TooltipV1Stories from '../../v1/_docs/Tooltip.stories'
import { Tooltip } from '../index'

const meta = {
  title: 'Overlays/Tooltip/v2',
  component: Tooltip,
  args: {
    text: 'Example tooltip text.',
  },
  decorators: [
    (Story) => (
      <div className="flex mt-[60px] gap-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

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
