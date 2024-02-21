import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "~components/Avatar"
import { ConfigureIcon } from "~components/Icon"
import { BrandMomentPositiveOutro, Informative } from "~components/Illustration"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { LoadingGraphic } from "../index"

const meta = {
  title: "Components/Loading states/LoadingGraphic",
  component: LoadingGraphic,
  args: {
    size: "xlarge",
  },
} satisfies Meta<typeof LoadingGraphic>

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

export const Size: Story = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={["Loading Skeleton", "Example"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Icon (small)">
          <LoadingGraphic size="small" />
          <ConfigureIcon aria-label="Aliens approaching!" role="img" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Avatar (medium)">
          <LoadingGraphic size="medium" />
          <Avatar
            fullName="Jane Doe"
            disableInitials={false}
            isCurrentUser
            size="medium"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Avatar (large)">
          <LoadingGraphic size="large" />
          <Avatar
            fullName="Jane Doe"
            disableInitials={false}
            isCurrentUser
            size="large"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Avatar (x-large)">
          <LoadingGraphic size="xlarge" />
          <Avatar
            fullName="Jane Doe"
            disableInitials={false}
            isCurrentUser
            size="xlarge"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Spot (xx-large)">
          <LoadingGraphic size="xxlarge" />
          <Informative
            alt="informative-spot-image"
            classNameOverride="!kz-w-[150px]"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Scene (scene)">
          <LoadingGraphic size="scene" />
          <BrandMomentPositiveOutro
            alt="positive-outro"
            classNameOverride="!kz-w-[400px]"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}
