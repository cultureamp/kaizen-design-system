import type { StoryObj } from '@storybook/react'

export type StickerSheetArgs<T extends Record<string, any>> = {
  isReversed?: boolean
} & T

export type StickerSheetStory<T extends Record<string, any> = object> = StoryObj<
  StickerSheetArgs<T>
>
