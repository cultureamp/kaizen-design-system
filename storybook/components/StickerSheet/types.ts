import { StoryObj } from "@storybook/react"

export type StickerSheetArgs = {
  isReversed?: boolean
  textDirection?: "ltr" | "rtl" // Global decorator arg - @see storybook/preview.tsx
}

export type StickerSheetStory = StoryObj<StickerSheetArgs>
