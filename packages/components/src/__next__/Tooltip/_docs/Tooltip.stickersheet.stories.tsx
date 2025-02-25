import React from 'react'
import { composeStories, type Meta, type StoryObj } from '@storybook/react'
import { ReversedColors } from '~components/utils'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import * as testStories from './Tooltip.spec.stories'

export default {
  title: 'Components/Tooltip/Tooltip (next)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const Stories = composeStories(testStories)

export const Standard: StoryObj = {
  name: 'Sticker Sheet (Default)',
  render: (args) => (
    <div className="grid gap-x-128 gap-y-128 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Object.values(Stories).map((Story, index) => (
        <div
          key={index}
          className={mergeClassNames(
            'flex items-center justify-center min-h-[10rem]',
            Story.parameters.reverseColors ? 'bg-purple-700' : '',
          )}
        >
          <ReversedColors isReversed={!!Story.parameters.reverseColors}>
            <Story {...args} defaultOpen={true} />
          </ReversedColors>
        </div>
      ))}
    </div>
  ),
}

export const StickerSheetRTL: StoryObj = {
  ...Standard,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...Standard.parameters,
    textDirection: 'rtl',
  },
}
