import { Meta, StoryObj } from "@storybook/react"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { Brand } from "../index"
import { StickerSheetDefault } from "./Brand.stickersheet.stories"

const meta = {
  title: "Tier 1/Brand",
  component: Brand,
  args: {
    variant: "logo-horizontal",
    alt: "Logo Horizontal",
  },
} satisfies Meta<typeof Brand>

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

export const Variants: StickerSheetStory = {
  ...StickerSheetDefault,
}
