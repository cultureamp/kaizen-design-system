import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "~components/Heading"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { LoadingHeading } from "../index"

const meta = {
  title: "Components/Loading states/LoadingHeading",
  component: LoadingHeading,
  args: {
    variant: "heading-1",
  },
} satisfies Meta<typeof LoadingHeading>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Animated: Story = {
  args: { isAnimated: true },
}

export const Reversed: Story = {
  args: { isReversed: true },
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
}

const headingVariants = [
  "display-0",
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "heading-5",
  "heading-6",
] as const

export const Variant: Story = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={["<LoadingHeading />", "<Heading />"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {headingVariants.map(variant => (
          <StickerSheet.Row key={variant} rowTitle={variant}>
            <LoadingHeading variant={variant} />
            <Heading variant={variant}>Heading</Heading>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const Link: Story = {
  args: { isLink: true },
}

export const Width: Story = {
  args: { width: 50 },
}
