import { Meta, StoryObj } from "@storybook/react"
import { BrandMomentCaptureIntro } from "../index"

const meta = {
  title: "Components/Illustrations/BrandMomentCaptureIntro",
  component: BrandMomentCaptureIntro,
} satisfies Meta<typeof BrandMomentCaptureIntro>

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
  args: {
    loop: false,
    isAnimated: true,
  },
}

export const Looped: Story = {
  args: {
    isAnimated: true,
    loop: true,
  },
}

export const Autoplay: Story = {
  args: {
    isAnimated: true,
    loop: true,
    autoplay: false,
  },
}
