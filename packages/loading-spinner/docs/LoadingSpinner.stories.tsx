import React from "react"
import { StoryFn } from "@storybook/react"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { LoadingSpinner } from "@kaizen/loading-spinner"

export default {
  tags: ["autodocs"],
  title: "Components/Loading States/Loading Spinner",
  component: LoadingSpinner,
  parameters: {
    docs: {
      description: {
        component: 'import { LoadingSpinner } from "@kaizen/loading-spinner"',
      },
    },
  },
}

/**
 * LoadingSpinner will inherit its color from the parent's `color` property.
 *
 * That color will become the foreground, and the background will be the same
 * color with 10% opacity.
 *
 * When inside a button, it is intended to have the same color as the label text.
 */
export const DefaultStory: StoryFn<typeof LoadingSpinner> = args => (
  <div style={{ color: colorTokens.color.green["400"] }}>
    <LoadingSpinner {...args} />
  </div>
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  accessibilityLabel: "Loading comments",
  size: "sm",
}

const StickerSheetTemplate: StoryFn = () => (
  <div className="grid gap-24 text-purple-400">
    <LoadingSpinner accessibilityLabel="Loading comments" size="sm" />
    <LoadingSpinner accessibilityLabel="Loading comments" size="md" />
  </div>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
