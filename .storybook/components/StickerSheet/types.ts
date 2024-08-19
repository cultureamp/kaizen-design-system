import { StoryObj } from "@storybook/react"
import { ColorSchema } from "@kaizen/components"

export type StickerSheetArgs = {
  isReversed?: boolean
  colorSchema?: ColorSchema
}

export type StickerSheetStory = StoryObj<StickerSheetArgs>
