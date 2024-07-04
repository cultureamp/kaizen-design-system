import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BrandMomentPositiveOutro, Informative } from "~components/Illustration"
import * as V1Stories from "../../v1/_docs/GuidanceBlock.stories"
import { GuidanceBlock } from "../index"

const meta = {
  title: "Containers/GuidanceBlock/v2",
  component: GuidanceBlock,
  args: {
    layout: "default",
    illustration: <Informative alt="" />,
  },
  argTypes: {
    actions: {
      control: false,
    },
    illustrationType: {
      description:
        "Sets the how the width and aspect ratio will respond to the Illustration passed in.",
    },
    illustration: {
      control: { type: "radio" },
      options: ["spot", "scene"],
      mapping: {
        spot: <Informative alt="" />,
        scene: <BrandMomentPositiveOutro alt="" />,
      },
      description:
        "This takes a scene scene or spot element, ie: `<Informative />`. This radio button implementation is a storybook only representation to toggle between the two illustration styles.",
    },
    content: {
      description:
        "If you need to render custom content inside of the `GuidanceBlock` that is more than just a title and description use this prop instead of the default `text` option.",
    },
  },
} satisfies Meta<typeof GuidanceBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = V1Stories.Playground
export const Actions: Story = V1Stories.Actions
export const Tooltip: Story = V1Stories.Tooltip
export const CustomContent: Story = V1Stories.CustomContent
export const Stacked: Story = V1Stories.Stacked
export const SceneExample: Story = V1Stories.SceneExample
export const Variants: Story = V1Stories.Variants
