import React from 'react'
import { type Meta, type StoryFn } from '@storybook/react'
import { StickerSheet } from '~storybook/components/StickerSheet'

export default {
  title: 'Guides/Tailwind/Utility Class References/Modifiers/Pseudo Selectors',
  parameters: {
    a11y: { disable: true },
    docsLayout: 'fullPage',
    docs: {
      description: {
        component:
          'Add a modifier before a standard tailwind utility class to have it apply in certain states. For example, hover:text-blue-500 will set the font color to blue-500 on hover.',
      },
    },
  },
} satisfies Meta

export const PseudoSelectors: StoryFn = () => (
  <StickerSheet headers={['Utility Class', 'Compiled CSS', 'Example']}>
    <StickerSheet.Row header="hover">
      <p className="font-family-paragraph">hover:bg-blue-200</p>
      <p className="font-family-paragraph">background-color: #bde2f5</p>
      <button
        type="button"
        className="border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded hover:bg-blue-200 py-16 px-12 text-center"
      >
        Hover me
      </button>
    </StickerSheet.Row>
    <StickerSheet.Row header="focus">
      <p className="font-family-paragraph">focus:bg-blue-200</p>
      <p className="font-family-paragraph">background-color: #bde2f5</p>
      <button
        type="button"
        tabIndex={0}
        className="border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded focus:bg-blue-200 py-16 px-12 text-center"
      >
        Focus me
      </button>
    </StickerSheet.Row>
  </StickerSheet>
)
